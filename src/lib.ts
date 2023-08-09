import { Args, Modes, OutfitSpec, Task } from "grimoire-kolmafia";
import { abort, Familiar, Item, print } from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $location,
  $skill,
  byStat,
  CommunityService,
  get,
  have,
  Macro,
  set,
} from "libram";

export class customMacro extends Macro {
  polarpocket(pockets: number): customMacro {
    let test = this.trySkill($skill`Fire Extinguisher: Polar Vortex`);

    while (pockets > 1) {
      test = test.trySkill($skill`Fire Extinguisher: Polar Vortex`);
      pockets--;
    }

    return test;
  }

  static polarpocket(pockets: number): customMacro {
    return new customMacro().polarpocket(pockets);
  }
}

export const loss: Task = {
  name: `Lost Combat!`,
  completed: () => get(`_lastCombatLost`) === false,
  do: () => abort(`Lost your most recent combat!`),
};

export const { guildQuest, guildURL, guildZone } = byStat({
  Muscle: {
    guildQuest: `questG09Muscle`,
    guildURL: `guild.php?guild=f`,
    guildZone: $location`The Outskirts of Cobb's Knob`,
  },
  Mysticality: {
    guildQuest: `questG07Myst`,
    guildURL: `guild.php?guild=m`,
    guildZone: $location`The Haunted Pantry`,
  },
  Moxie: {
    guildQuest: `questG08Moxie`,
    guildURL: `guild.php?guild=t`,
    guildZone: $location`The Sleazy Back Alley`,
  },
});

export function retroMainstat(): `vampire` | `heck` | `robot` {
  return byStat({
    Muscle: `vampire`,
    Mysticality: `heck`,
    Moxie: `robot`,
  });
}

function familiarChoice(): Familiar {
  if (args.fam) {
    return args.familiar;
  } else if (!have($effect`Spit Upon`)) {
    return $familiar`Melodramedary`;
  } else if (!have($item`short stack of pancakes`)) {
    return $familiar`Shorter-Order Cook`;
  } else return $familiar`Patriotic Eagle`;
}

export function familiarAttacks(): boolean {
  return args.familiar.elementalDamage || args.familiar.physicalDamage;
}

export function oomfieOutfit(options?: {
  hatOverride?: Item | undefined;
  backOverride?: Item | undefined;
  shirtOverride?: Item | undefined;
  weaponOverride?: Item | undefined;
  offhandOverride?: Item | undefined;
  pantsOverride?: Item | undefined;
  acc1Override?: Item | undefined;
  acc2Override?: Item | undefined;
  acc3Override?: Item | undefined;
  familiarOverride?: Familiar | undefined;
  famequipOverride?: Item | undefined;
  modesOverride?: Modes | undefined;
  modifier?: string | undefined;
}): OutfitSpec {
  let famOverride: Familiar | undefined = undefined;
  if (args.fam) {
    if (args.familiar === $familiar.none) {
      abort(`Something has gone wrong with args.familiar (${args.familiar})`);
    } else {
      famOverride = args.familiar;
    }
  }

  if (options?.modifier) {
    return {
      hat: options?.hatOverride ?? undefined,
      back: options?.backOverride ?? undefined,
      shirt: options?.shirtOverride ?? undefined,
      weapon: options?.weaponOverride ?? undefined,
      offhand: options?.offhandOverride ?? undefined,
      pants: options?.pantsOverride ?? undefined,
      acc1: options?.acc1Override ?? undefined,
      acc2: options?.acc2Override ?? undefined,
      acc3: options?.acc3Override ?? undefined,
      familiar: famOverride ?? options?.familiarOverride ?? familiarChoice(),
      famequip: options?.famequipOverride ?? $item`tiny stillsuit`,
      modes: options?.modesOverride ?? undefined,
    };
  } else {
    return {
      hat: options?.hatOverride ?? $item`Daylight Shavings Helmet`,
      back: options?.backOverride ?? $item`unwrapped knock-off retro superhero cape`,
      shirt: options?.shirtOverride ?? $item`Jurassic Parka`,
      weapon: options?.weaponOverride ?? $item`June cleaver`,
      offhand: options?.offhandOverride ?? $item`unbreakable umbrella`,
      pants: options?.pantsOverride ?? $item`designer sweatpants`,
      acc1: options?.acc1Override ?? $item`backup camera`,
      acc2: options?.acc2Override ?? $item`your cowboy boots`,
      acc3: options?.acc3Override ?? $item`combat lover's locket`,
      familiar: famOverride ?? options?.familiarOverride ?? familiarChoice(),
      famequip: options?.famequipOverride ?? $item`tiny stillsuit`,
      modes: options?.modesOverride ?? undefined,
    };
  }
}

export function logTest(test: CommunityService, turns: number, turnsPredicted: number): void {
  const prefix = `_ms_`;
  set(`${prefix}${test.id}`, turns);
  set(`${prefix}${test.id}p`, turnsPredicted);
}

export function printLoggedTests(): void {
  const prefix = `_ms_`;
  const allTests = [
    CommunityService.BoozeDrop,
    CommunityService.CoilWire,
    CommunityService.FamiliarWeight,
    CommunityService.HP,
    CommunityService.HotRes,
    CommunityService.Moxie,
    CommunityService.Muscle,
    CommunityService.Mysticality,
    CommunityService.Noncombat,
    CommunityService.SpellDamage,
    CommunityService.WeaponDamage,
  ];

  for (const test of allTests) {
    print(
      `${test.statName}: ${get(`${prefix}${test.id}`, 0)} [Predicted ${get(
        `${prefix}${test.id}p`,
        0
      )}]`,
      `teal`
    );
  }
}

export const args = Args.create(`Mustard Service`, `Community Service Script by Moon Moon`, {
  run: Args.flag({
    setting: ``,
    help: `Run Community Service`,
    default: false,
  }),
  fam: Args.flag({
    setting: ``,
    help: `Do a 100% run with currently equipped familiar`,
    default: false,
  }),
  familiar: Args.familiar({
    setting: ``,
    hidden: true,
    default: $familiar.none,
  }),
});

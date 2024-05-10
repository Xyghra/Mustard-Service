import {
  Args,
  CombatStrategy as GrimoireCombatStrategy,
  Modes,
  OutfitSpec,
  Task,
} from "grimoire-kolmafia";
import {
  Familiar,
  Item,
  abort,
  myClass,
  myFamiliar,
  myHash,
  myMeat,
  print,
  visitUrl,
} from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $location,
  $skill,
  $stat,
  BarrelShrine,
  CommunityService,
  Macro,
  byStat,
  get,
  have,
  set,
  uneffect,
} from "libram";

export class CombatStrategy extends GrimoireCombatStrategy {}

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

export const barrelItems: Item[] = [
  $item`strongness elixir`,
  $item`enchanted barbell`,
  $item`extra-strength strongness elixir`,
  $item`magicalness-in-a-can`,
  $item`concentrated magicalness pill`,
  $item`jug-o-magicalness`,
  $item`moxie weed`,
  $item`suntan lotion of moxiousness`,
  $item`bottle of gin`,
  $item`bottle of rum`,
  $item`bottle of tequila`,
  $item`bottle of vodka`,
  $item`bottle of whiskey`,
  $item`boxed wine`,
  $item`fine wine`,
  $item`shot of grapefruit schnapps`,
  $item`shot of orange schnapps`,
  $item`shot of tomato schnapps`,
  $item`margarita`,
  $item`martini`,
  $item`monkey wrench`,
  $item`salty dog`,
  $item`screwdriver`,
  $item`strawberry daiquiri`,
  $item`strawberry wine`,
  $item`tequila sunrise`,
  $item`vodka martini`,
  $item`whiskey and soda`,
  $item`whiskey sour`,
  $item`wine spritzer`,
  $item`ducha de oro`,
  $item`calle de miel`,
  $item`pink pony`,
  $item`rockin' wagon`,
  $item`roll in the hay`,
  $item`slip 'n' slide`,
  $item`ocean motion`,
  $item`horizontal tango`,
  $item`perpendicular hula`,
  $item`slap and tickle`,
  $item`fuzzbump`,
  $item`a little sump'm sump'm`,
  $item`bean burrito`,
  $item`spicy bean burrito`,
  $item`enchanted bean burrito`,
  $item`spicy enchanted bean burrito`,
  $item`jumping bean burrito`,
  $item`spicy jumping bean burrito`,
  $item`Doc Galaktik's Homeopathic Elixir`,
  $item`Doc Galaktik's Ailment Ointment`,
  $item`cast`,
];

function barrelsAreSmashed(): boolean {
  if (!BarrelShrine.have()) return true;
  if (get(`_barrelsPopped`, false)) return true;
  const barrel = visitUrl(`barrel.php`);
  const brokenBarrelMatch = /img title="A broken barrel"/g;
  const unbrokenBarrelMatch = /img title="A barrel"/g;
  const brokenBarrelCount = barrel.match(brokenBarrelMatch)?.length ?? 0;
  const unbrokenBarrelCount = barrel.match(unbrokenBarrelMatch)?.length ?? 9;
  if (brokenBarrelCount > 0 && brokenBarrelCount + unbrokenBarrelCount === 9) {
    set(`_barrelsPopped`, true);
  }
  return get(`_barrelsPopped`, false);
}

export const barrelSmashing: Task = {
  name: `Smash Barrels!`,
  completed: () => barrelsAreSmashed() || myMeat() >= 81,
  do: (): void => {
    const barrel = visitUrl(`barrel.php`);
    const matcher = /div class="([a-z]+)".*?&slot=([0-9]+)/g;
    const matches = barrel.match(matcher);
    if (matches) {
      for (const bar of matches) {
        const slot = bar.match(`slot=([0-9]+)`);
        if (slot) {
          if (bar.includes(`mimic`)) {
            print(`Mimic on slot ${slot[1]}`);
          } else {
            print(`No mimic on slot ${slot[1]}`);
            visitUrl(`barrel.php`);
            visitUrl(`choice.php?whichchoice=1099&pwd=${myHash()}&option=1&slot=${slot[1]}`);
          }
        }
      }
    }
    set(`_barrelsPopped`, true);
  },
};

function familiarChoice(): Familiar {
  if (args.fam) {
    return args.familiar;
  } else if (!have($effect`Spit Upon`)) {
    return $familiar`Melodramedary`;
  } else if (!have($item`short stack of pancakes`)) {
    return $familiar`Shorter-Order Cook`;
  } else return $familiar`Jill-of-All-Trades`;
}

export function familiarAttacks(): boolean {
  return args.familiar.elementalDamage || args.familiar.physicalDamage;
}

export const juneCleaverTask: Task = {
  name: `June Cleave`,
  completed: () => get(`_juneCleaverFightsLeft`) > 0,
  do: () => $location`The Sleazy Back Alley`,
  outfit: {
    weapon: $item`June cleaver`,
  },
  post: (): void => {
    if (have($effect`Beaten Up`)) {
      uneffect($effect`Beaten Up`);
    }
  },
  choices: () => ({
    1468:
      myClass().primestat === $stat`Muscle`
        ? 2
        : myClass().primestat === $stat`Moxie`
          ? 1
          : get(`_juneCleaverSkips`) < 5
            ? 4
            : 2,
    1473: myClass().primestat === $stat`Muscle` ? 1 : get(`_juneCleaverSkips`) < 5 ? 4 : 1,
    1469: 3,
    1474:
      myClass().primestat === $stat`Muscle`
        ? 3
        : myClass().primestat === $stat`Mysticality`
          ? 1
          : get(`_juneCleaverSkips`) < 5
            ? 4
            : 3,
    1475: myClass().primestat === $stat`Muscle` ? 2 : get(`_juneCleaverSkips`) < 5 ? 4 : 2,
    1471: 1,
    1467: 3,
    1472: myClass().primestat === $stat`Moxie` ? 3 : get(`_juneCleaverSkips`) < 5 ? 4 : 1,
    1470: myClass().primestat === $stat`Muscle` ? 3 : get(`_juneCleaverSkips`) < 5 ? 4 : 2,
  }),
  combat: new CombatStrategy().autoattack(() => Macro.abort()),
};

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
  let famequipOverride: Item | undefined = undefined;
  if (args.fam) {
    if (args.familiar === $familiar.none) {
      abort(`Something has gone wrong with args.familiar (${args.familiar})`);
    } else {
      famOverride = args.familiar;
      famequipOverride = $item`tiny stillsuit`;
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
      famequip:
        famequipOverride ??
        options?.famequipOverride ??
        [
          $familiar`Ghost of Crimbo Carols`,
          $familiar`Ghost of Crimbo Cheer`,
          $familiar`Ghost of Crimbo Commerce`,
        ].includes(myFamiliar())
          ? $item.none
          : $item`tiny stillsuit`,
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
      acc3:
        options?.acc3Override ??
        (have($item`spring shoes`)
          ? $item`spring shoes`
          : have($item`Brutal brogues`)
            ? $item`Brutal brogues`
            : $item`combat lover's locket`),
      familiar: famOverride ?? options?.familiarOverride ?? familiarChoice(),
      famequip:
        famequipOverride ??
        options?.famequipOverride ??
        [
          $familiar`Ghost of Crimbo Carols`,
          $familiar`Ghost of Crimbo Cheer`,
          $familiar`Ghost of Crimbo Commerce`,
        ].includes(myFamiliar())
          ? $item.none
          : $item`tiny stillsuit`,
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
        0,
      )}]`,
      `teal`,
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

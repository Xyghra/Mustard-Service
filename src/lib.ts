import { Args, Modes, OutfitSpec } from "grimoire-kolmafia";
import { Familiar, Item } from "kolmafia";
import { $effect, $familiar, $item, $location, byStat, have } from "libram";

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
  if (!have($effect`Spit Upon`)) {
    return $familiar`Melodramedary`;
  } else if (!have($item`short stack of pancakes`)) {
    return $familiar`Shorter-Order Cook`;
  } else return $familiar`Patriotic Eagle`;
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
      familiar: options?.familiarOverride ?? familiarChoice(),
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
      familiar: options?.familiarOverride ?? familiarChoice(),
      famequip: options?.famequipOverride ?? $item`tiny stillsuit`,
      modes: options?.modesOverride ?? undefined,
    };
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
});

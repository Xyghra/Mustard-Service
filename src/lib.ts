import { Familiar } from "kolmafia";
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

export function familiarChoice(): Familiar {
  if (!have($effect`Spit Upon`)) {
    return $familiar`Melodramedary`;
  } else if (!have($item`short stack of pancakes`)) {
    return $familiar`Shorter-Order Cook`;
  } else return $familiar`Patriotic Eagle`;
}

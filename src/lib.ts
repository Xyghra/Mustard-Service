import { $location, byStat } from "libram";

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

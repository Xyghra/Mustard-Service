import { Quest, Task } from "grimoire-kolmafia";
import { cliExecute, print, use } from "kolmafia";
import { $effect, $familiar, $item, Clan, CommunityService, get, have } from "libram";
import { printModtrace } from "libram/dist/modifier";
import { logTest } from "../lib";

export const famwtQuest: Quest<Task> = {
  name: `Familiar Weight Test`,
  completed: () => CommunityService.FamiliarWeight.isDone(),
  tasks: [
    {
      name: `Overloaded Yule Battery`,
      ready: () => have($item`box of Familiar Jacks`),
      completed: () => have($item`overloaded Yule battery`),
      do: () => use(1, $item`box of Familiar Jacks`),
      outfit: {
        familiar: $familiar`Mini-Trainbot`,
      },
    },
    {
      name: `Witchess Buff`,
      completed: () => get(`_witchessBuff`),
      do: () => cliExecute(`witchess`),
    },
    {
      name: `Pancakes`,
      completed: () => have($effect`Shortly Stacked`) || !have($item`short stack of pancakes`),
      do: () => use(1, $item`short stack of pancakes`),
    },
    {
      name: `Pool Buff`,
      prepare: () => Clan.join(`Bonus Adventures from Hell`),
      completed: () => have($effect`Billiards Belligerence`) || get(`_poolGames`) >= 3,
      do: () => cliExecute(`pool 1`),
    },
    {
      name: `♥ Rocks`,
      ready: () => have($item`lump of loyal latite`),
      completed: () => have($effect`Loyal as a Rock`),
      do: () => use(1, $item`lump of loyal latite`),
    },
    {
      name: `Hatter Buff`,
      completed: () =>
        true ||
        !have($item`"DRINK ME" potion`) ||
        have($effect`You Can Really Taste the Dormouse`) ||
        !have($item`sombrero-mounted sparkler`),
      do: () => cliExecute(`hatter sombrero-mounted sparkler`),
    },
    {
      name: `Familiar Weight Test`,
      completed: () => CommunityService.FamiliarWeight.isDone(),
      do: (): void => {
        const predictedTestTurns = CommunityService.FamiliarWeight.prediction;
        const testTurns = CommunityService.FamiliarWeight.actualCost();
        printModtrace(`familiar weight`);
        print(`Expecting: [${predictedTestTurns}]`, `blue`);
        print(`Took: [${testTurns}]`, `blue`);

        CommunityService.FamiliarWeight.run(
          () => logTest(CommunityService.FamiliarWeight, testTurns, predictedTestTurns),
          42
        );
      },
      outfit: {
        modifier: `familiar weight, switch left-hand man, switch Mini-Trainbot`,
      },
      limit: { tries: 1 },
      effects: [$effect`Empathy`, $effect`Blood Bond`, $effect`Leash of Linguini`],
    },
  ],
};

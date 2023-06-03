import { Quest, Task } from "grimoire-kolmafia";
import { cliExecute, print, use } from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  Clan,
  CommunityService,
  ensureEffect,
  get,
  have,
  set,
} from "libram";
import { printModtrace } from "libram/dist/modifier";

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
      name: `Pool Buff`,
      prepare: () => Clan.join(`Bonus Adventures from Hell`),
      completed: () => have($effect`Billiards Belligerence`) || get(`_poolGames`) >= 3,
      do: () => cliExecute(`pool 1`),
    },
    {
      name: `Familiar Weight Test`,
      prepare: () =>
        [$effect`Empathy`, $effect`Blood Bond`, $effect`Leash of Linguini`].forEach((ef) =>
          ensureEffect(ef)
        ),
      completed: () => CommunityService.FamiliarWeight.isDone(),
      do: (): void => {
        const predictedTestTurns = CommunityService.FamiliarWeight.prediction;
        const testTurns = CommunityService.FamiliarWeight.actualCost();
        printModtrace(`familiar weight`);
        print(`Expecting: [${predictedTestTurns}]`, `blue`);
        print(`Took: [${testTurns}]`, `blue`);

        CommunityService.FamiliarWeight.run(
          () =>
            set(
              `_mustardServiceTests`,
              `${get(`_mustardServiceTests`)},${testTurns} [Expected: ${predictedTestTurns}]`
            ),
          42
        );
      },
      outfit: {
        modifier: `familiar weight`,
        familiar: $familiar`Mini-Trainbot`,
        famequip: $item`overloaded Yule battery`,
      },
      limit: { tries: 1 },
    },
  ],
};

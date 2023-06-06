import { Quest, Task } from "grimoire-kolmafia";
import { cliExecute, print, use } from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $location,
  Clan,
  CommunityService,
  ensureEffect,
  get,
  have,
  set,
} from "libram";
import { printModtrace } from "libram/dist/modifier";

export const noncombatQuest: Quest<Task> = {
  name: `Noncombat Test`,
  completed: () => CommunityService.Noncombat.isDone(),
  tasks: [
    {
      name: `Shadow Waters`,
      completed: () => have($effect`Shadow Waters`) || !have($item`Rufus's shadow lodestone`),
      do: () => $location`Shadow Rift`,
      choices: { 1500: 2 },
    },
    {
      name: `Silent Running`,
      prepare: () => Clan.join(`Bonus Adventures from Hell`),
      completed: () => have($effect`Silent Running`) || get(`_olympicSwimmingPool`),
      do: () => cliExecute(`swim noncombat`),
    },
    {
      name: `Squeaky Rose`,
      completed: () =>
        !have($item`squeaky toy rose`) || have($effect`A Rose by Any Other Material`),
      do: () => use(1, $item`squeaky toy rose`),
    },
    {
      name: `Shady Shades`,
      completed: () => !have($item`shady shades`) || have($effect`Throwing Some Shade`),
      do: () => use(1, $item`shady shades`),
    },
    {
      name: `Noncombat Test`,
      prepare: () =>
        [
          $effect`Empathy`,
          $effect`Blood Bond`,
          $effect`Leash of Linguini`,
          $effect`The Sonata of Sneakiness`,
          $effect`Smooth Movements`,
          $effect`Feeling Lonely`,
        ].forEach((ef) => ensureEffect(ef)),
      completed: () => CommunityService.Noncombat.isDone(),
      do: (): void => {
        const predictedTestTurns = CommunityService.Noncombat.prediction;
        const testTurns = CommunityService.Noncombat.actualCost();
        printModtrace(`combat rate`);
        print(`Expecting: [${predictedTestTurns}]`, `blue`);
        print(`Took: [${testTurns}]`, `blue`);

        CommunityService.Noncombat.run(
          () =>
            set(
              `_mustardServiceTests`,
              `${get(`_mustardServiceTests`)},${testTurns} [Expected: ${predictedTestTurns}]`
            ),
          1
        );
      },
      outfit: {
        offhand: $item`unbreakable umbrella`,
        modifier: `-60 combat rate 13 familiar weight`,
        familiar: $familiar`Disgeist`,
        famequip: $item`tiny stillsuit`,
        modes: {
          umbrella: `cocoon`,
        },
      },
      limit: { tries: 1 },
    },
  ],
};

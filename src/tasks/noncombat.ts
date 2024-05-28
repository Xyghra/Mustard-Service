import { Quest, Task } from "grimoire-kolmafia";
import { abort, cliExecute, print, use } from "kolmafia";
import { $effect, $familiar, $item, $location, Clan, CommunityService, get, have } from "libram";
import { printModtrace } from "libram/dist/modifier";
import { logTest, oomfieOutfit } from "../lib";

export const noncombatQuest: Quest<Task> = {
  name: `Noncombat Test`,
  completed: () => CommunityService.Noncombat.isDone(),
  tasks: [
    {
      name: `Shadow Waters`,
      completed: () => have($effect`Shadow Waters`) || !have($item`Rufus's shadow lodestone`),
      do: () => $location`Shadow Rift`,
      outfit: oomfieOutfit(),
      choices: { 1500: 2 },
    },
    {
      name: `Ultra-Soft Steps`,
      ready: () => have($item`ultra-soft ferns`),
      completed: () => have($effect`Ultra-Soft Steps`),
      do: () => use(1, $item`ultra-soft ferns`),
    },
    {
      name: `Squeaky Rose`,
      completed: () =>
        !have($item`squeaky toy rose`) || have($effect`A Rose by Any Other Material`),
      do: () => use(1, $item`squeaky toy rose`),
      outfit: () => ({
        familiar: $familiar`Disgeist`,
      }),
    },
    {
      name: `Shady Shades`,
      completed: () => !have($item`shady shades`) || have($effect`Throwing Some Shade`),
      do: () => use(1, $item`shady shades`),
      outfit: () => ({
        //hat: have($item`very pointy crown`) ? $item`very pointy crown` : undefined,
        //offhand: $item`unbreakable umbrella`,
        modifier: `-combat, 0.04 familiar weight 75 max, switch disgeist, switch left-hand man, switch disembodied hand, -tie`,
      }),
      effects: [
        $effect`Empathy`,
        $effect`Blood Bond`,
        $effect`Leash of Linguini`,
        $effect`The Sonata of Sneakiness`,
        $effect`Smooth Movements`,
        $effect`Feeling Lonely`,
      ],
    },
    {
      name: `Silent Running`,
      prepare: () => Clan.join(`Bonus Adventures from Hell`),
      completed: () =>
        have($effect`Silent Running`) ||
        get(`_olympicSwimmingPool`) ||
        CommunityService.Noncombat.prediction <= 1,
      do: (): void => {
        const actualTurncost = CommunityService.Noncombat.actualCost();
        if (
          CommunityService.Noncombat.prediction > 0 &&
          actualTurncost !== CommunityService.Noncombat.prediction
        ) {
          print(`The Actual Cost and the Prediction are mismatched!`);
          printModtrace(`combat rate`);
          cliExecute(`refresh all`);
          printModtrace(`combat rate`);
          if (
            CommunityService.Noncombat.prediction > 0 &&
            actualTurncost !== CommunityService.Noncombat.prediction
          ) {
            abort(`Could not Resolve mismatch`);
          }
        }
        if (actualTurncost <= 1) return;
        cliExecute(`swim noncombat`);
      },
      outfit: () => ({
        modifier: `-combat, 0.04 familiar weight 75 max, switch disgeist, switch left-hand man, switch disembodied hand, -tie`,
      }),
    },
    {
      name: `Noncombat Test`,
      completed: () => CommunityService.Noncombat.isDone(),
      do: (): void => {
        const predictedTestTurns = CommunityService.Noncombat.prediction;
        const testTurns = CommunityService.Noncombat.actualCost();
        printModtrace(`combat rate`);
        print(`Expecting: [${predictedTestTurns}]`, `blue`);
        print(`Took: [${testTurns}]`, `blue`);

        CommunityService.Noncombat.run(
          () => logTest(CommunityService.Noncombat, testTurns, predictedTestTurns),
          1
        );
      },

      limit: { tries: 1 },
    },
  ],
};

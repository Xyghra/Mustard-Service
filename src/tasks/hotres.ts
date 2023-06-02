import { CombatStrategy, Quest, Task } from "grimoire-kolmafia";
import { print, use } from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $monster,
  $skill,
  CombatLoversLocket,
  CommunityService,
  ensureEffect,
  get,
  have,
  Macro,
  set,
} from "libram";
import { printModtrace } from "libram/dist/modifier";

export const hotresQuest: Quest<Task> = {
  name: `Hot Resistance Test`,
  completed: () => CommunityService.HotRes.isDone(),
  tasks: [
    {
      name: `Foam Suit`,
      completed: () => have($effect`Fireproof Foam Suit`) || get(`_fireExtinguisherCharge`) <= 0,
      do: () => CombatLoversLocket.reminisce($monster`ungulith`),
      outfit: {
        weapon: $item`Fourth of May Cosplay Saber`,
        offhand: $item`industrial fire extinguisher`,
      },
      choices: { 1387: 3 },
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Fire Extinguisher: Foam Yourself`)
          .trySkill($skill`Use the Force`)
          .abort()
      ),
    },
    {
      name: `Hot Resistance Test`,
      prepare: () =>
        [
          $effect`Elemental Saucesphere`,
          $effect`Feeling Peaceful`,
          $effect`Astral Shell`,
          $effect`Blood Bond`,
          $effect`Empathy`,
          $effect`Leash of Linguini`,
        ].forEach((ef) => ensureEffect(ef)),
      completed: () => CommunityService.HotRes.isDone(),
      do: (): void => {
        const predictedTestTurns = CommunityService.HotRes.prediction;
        if (predictedTestTurns > 1) {
          use(1, $item`pocket maze`);
        }
        const testTurns = CommunityService.HotRes.actualCost();
        printModtrace(`hot resistance`);
        print(`Expecting: [${predictedTestTurns}]`, `blue`);
        print(`Took: [${testTurns}]`, `blue`);

        CommunityService.HotRes.run(
          () =>
            set(
              `_mustardServiceTests`,
              `${get(`_mustardServiceTests`)},${testTurns} [Expected: ${predictedTestTurns}]`
            ),
          1
        );
      },
      outfit: {
        familiar: $familiar`Exotic Parrot`,
        famequip: $item`tiny stillsuit`,
        modifier: `hot resistance`,
      },
      limit: { tries: 1 },
    },
  ],
};

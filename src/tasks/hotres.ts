import { CombatStrategy, Quest, Task } from "grimoire-kolmafia";
import { print, use } from "kolmafia";
import {
  $effect,
  $item,
  $monster,
  $skill,
  CombatLoversLocket,
  CommunityService,
  Macro,
  get,
  have,
} from "libram";
import { printModtrace } from "libram/dist/modifier";
import { logTest, oomfieOutfit } from "../lib";

export const hotresQuest: Quest<Task> = {
  name: `Hot Resistance Test`,
  completed: () => CommunityService.HotRes.isDone(),
  tasks: [
    {
      name: `Foam Suit`,
      completed: () => have($effect`Fireproof Foam Suit`) || get(`_fireExtinguisherCharge`) <= 0,
      do: () => CombatLoversLocket.reminisce($monster`ungulith`),
      outfit: oomfieOutfit({
        weaponOverride: $item`Fourth of May Cosplay Saber`,
        offhandOverride: $item`industrial fire extinguisher`,
        acc1Override: $item`backup camera`,
        acc2Override: $item`your cowboy boots`,
        modesOverride: {
          backupcamera: `ml`,
        },
      }),
      choices: { 1387: 3 },
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Fire Extinguisher: Foam Yourself`)
          .trySkill($skill`Use the Force`)
          .abort(),
      ),
    },
    {
      name: `Hot Resistance Test`,
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
          () => logTest(CommunityService.HotRes, testTurns, predictedTestTurns),
          1,
        );
      },
      outfit: {
        modifier: `hot resistance, switch left-hand man, switch exotic parrot`,
      },
      effects: [
        $effect`Elemental Saucesphere`,
        $effect`Feeling Peaceful`,
        $effect`Astral Shell`,
        $effect`Blood Bond`,
        $effect`Empathy`,
        $effect`Leash of Linguini`,
      ],
      limit: { tries: 1 },
    },
  ],
};

import { Quest, Task } from "grimoire-kolmafia";
import { cliExecute, familiarWeight, haveEffect, itemAmount, print, use } from "kolmafia";
import {
  $effect,
  $familiar,
  $familiars,
  $item,
  BeachComb,
  Clan,
  CommunityService,
  get,
  have,
} from "libram";
import { printModtrace } from "libram/dist/modifier";
import { logTest } from "../lib";

const bestFam = $familiars
  .all()
  .filter((F) => have(F) && F !== $familiar`Homemade Robot`)
  .sort((a, b) => familiarWeight(b) - familiarWeight(a))[0];

export const famwtQuest: Quest<Task> = {
  name: `Familiar Weight Test`,
  completed: () => CommunityService.FamiliarWeight.isDone(),
  tasks: [
    {
      name: `Overloaded Yule Battery`,
      ready: () => have($item`box of Familiar Jacks`),
      completed: () => true || have($item`overloaded Yule battery`),
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
      name: `Love Song`,
      completed: () => have($effect`Cold Hearted`) || !have($item`love song of icy revenge`),
      do: () =>
        use(
          Math.min(
            4 - Math.floor(haveEffect($effect`Cold Hearted`) / 5),
            itemAmount($item`love song of icy revenge`)
          ),
          $item`love song of icy revenge`
        ),
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
      name: `Comb Familiar Weight head`,
      ready: () => have($item`Beach Comb`) && BeachComb.headAvailable(`FAMILIAR`),
      completed: () => have($effect`Do I Know You From Somewhere?`),
      do: () => BeachComb.tryHead(`FAMILIAR`),
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
        modifier: `familiar weight, switch left-hand man, ${
          have($item`overloaded Yule battery`) ? `switch Mini-Trainbot,` : ``
        } switch ${bestFam}`,
      },
      limit: { tries: 1 },
      effects: [$effect`Empathy`, $effect`Blood Bond`, $effect`Leash of Linguini`],
    },
  ],
};

import { Quest, Task } from "grimoire-kolmafia";
import { cliExecute, print, retrieveItem, use, useSkill } from "kolmafia";
import {
  $effect,
  $item,
  $location,
  $skill,
  CommunityService,
  DeckOfEveryCard,
  ensureEffect,
  get,
  have,
  set,
} from "libram";
import { printModtrace } from "libram/dist/modifier";

export const boozeQuest: Quest<Task> = {
  name: `Item and Booze Drop Test`,
  completed: () => CommunityService.BoozeDrop.isDone(),
  tasks: [
    {
      name: `Retreive Clover`,
      completed: () => have($item`11-leaf clover`) || get(`_cloversPurchased`) >= 2,
      do: () => retrieveItem(1, $item`11-leaf clover`),
    },
    {
      name: `Retrieve Cyclops Eyedrops`,
      prepare: () => use(1, $item`11-leaf clover`),
      completed: () => have($effect`One Very Clear Eye`) || have($item`cyclops eyedrops`),
      do: $location`The Limerick Dungeon`,
      limit: { tries: 1 },
    },
    {
      name: `Use Eyedrops`,
      completed: () => have($effect`One Very Clear Eye`),
      do: () => use(1, $item`cyclops eyedrops`),
    },
    {
      name: `Feel Lost`,
      completed: () => have($effect`Feeling Lost`) || get(`_feelLostUsed`) >= 1,
      do: () => useSkill(1, $skill`Feel Lost`),
    },
    {
      name: `Wheel of Fortune`,
      completed: () => have($effect`Fortune of the Wheel`) || get(`_deckCardsDrawn`) > 0,
      do: () => DeckOfEveryCard.cheatCard(`X - The Wheel of Fortune`),
    },
    {
      name: `Infernal Thirst Wish`,
      completed: () => get(`_genieWishesUsed`) >= 3 || have($effect`Infernal Thirst`),
      do: () => cliExecute(`genie effect Infernal Thirst`),
    },
    {
      name: `Bag of Grain`,
      completed: () => have($effect`Nearly All-Natural`) || !have($item`bag of grain`),
      do: () => use(1, $item`bag of grain`),
    },
    {
      name: `Autumn Leaf`,
      completed: () => have($effect`Crunching Leaves`) || !have($item`autumn leaf`),
      do: () => use(1, $item`autumn leaf`),
    },
    {
      name: `Item and Booze Drop Test`,
      prepare: () =>
        [
          $effect`Fat Leon's Phat Loot Lyric`,
          $effect`Singer's Faithful Ocelot`,
          $effect`Steely-Eyed Squint`,
          $effect`Spice Haze`,
        ].forEach((ef) => ensureEffect(ef)),
      completed: () => CommunityService.BoozeDrop.isDone(),
      do: (): void => {
        const predictedTestTurns = CommunityService.BoozeDrop.prediction;
        const testTurns = CommunityService.BoozeDrop.actualCost();
        printModtrace(`item drop`);
        printModtrace(`booze drop`);
        print(`Expecting: [${predictedTestTurns}]`, `blue`);
        print(`Took: [${testTurns}]`, `blue`);

        CommunityService.BoozeDrop.run(
          () =>
            set(
              `_mustardServiceTests`,
              `${get(`_mustardServiceTests`)},${testTurns} [Expected: ${predictedTestTurns}]`
            ),
          1
        );
      },
      outfit: {
        modifier: `15 Item Drop, 30 Booze Drop, -100 Gear Drop, -equip broken champagne bottle`,
      },
      limit: { tries: 1 },
    },
  ],
};

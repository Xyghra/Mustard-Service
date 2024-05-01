import { CombatStrategy, Quest, Task } from "grimoire-kolmafia";
import { cliExecute, holiday, print, retrieveItem, runChoice, use, useSkill } from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $location,
  $monster,
  $skill,
  AprilingBandHelmet,
  Cartography,
  CommunityService,
  DeckOfEveryCard,
  Macro,
  get,
  have,
  set,
} from "libram";
import { printModtrace } from "libram/dist/modifier";
import { logTest, oomfieOutfit } from "../lib";

export const boozeQuest: Quest<Task> = {
  name: `Item and Booze Drop Test`,
  completed: () => CommunityService.BoozeDrop.isDone(),
  tasks: [
    {
      name: `Apriling Band Helmet: Party!`,
      ready: () => AprilingBandHelmet.have(),
      completed: () =>
        !AprilingBandHelmet.canChangeSong() || have($effect`Apriling Band Celebration Bop`),
      do: () => AprilingBandHelmet.conduct(`Apriling Band Celebration Bop`),
    },
    {
      name: `Retreive Clover`,
      ready: () =>
        get(`_monstersMapped`) >= 3 ||
        get(`_saberForceUses`) >= 5 ||
        [`Feast of Boris`].includes(holiday()),
      completed: () =>
        have($item`11-leaf clover`) ||
        get(`_cloversPurchased`) >= 2 ||
        have($effect`All I Want For Crimbo Is Stuff`) ||
        have($effect`Bat-Adjacent Form`),
      do: () => retrieveItem(1, $item`11-leaf clover`),
    },
    {
      name: `Retrieve Cyclops Eyedrops`,
      prepare: () => use(1, $item`11-leaf clover`),
      ready: () =>
        get(`_monstersMapped`) >= 3 ||
        get(`_saberForceUses`) >= 5 ||
        [`Feast of Boris`].includes(holiday()),
      completed: () =>
        have($effect`One Very Clear Eye`) ||
        have($item`cyclops eyedrops`) ||
        have($effect`All I Want For Crimbo Is Stuff`) ||
        have($effect`Bat-Adjacent Form`),
      do: $location`The Limerick Dungeon`,
      outfit: () => oomfieOutfit(),
      limit: { tries: 1 },
    },
    {
      name: `Carol + Cloake`,
      ready: () =>
        have($familiar`Ghost of Crimbo Carols`) &&
        get(`_monstersMapped`) < 3 &&
        get(`_saberForceUses`) < 5,
      completed: () =>
        [`Feast of Boris`].includes(holiday()) ||
        have($effect`All I Want For Crimbo Is Stuff`) ||
        have($effect`Bat-Adjacent Form`),
      do: () => Cartography.mapMonster($location`Barf Mountain`, $monster`garbage tourist`),
      choices: { 1387: 3 },
      outfit: () => ({
        weapon: $item`Fourth of May Cosplay Saber`,
        back: $item`vampyric cloake`,
        familiar: $familiar`Ghost of Crimbo Carols`,
      }),
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Become a Bat`)
          .trySkill($skill`Use the Force`)
          .abort(),
      ),
      post: (): void => {
        runChoice(3);
        if (get(`_vampyreCloakeFormUses`) < 10)
          set(`_vampyreCloakeFormUses`, get(`_vampyreCloakeFormUses`) + 1);
      },
    },
    {
      name: `Use Eyedrops`,
      completed: () =>
        have($effect`All I Want For Crimbo Is Stuff`) ||
        have($effect`Bat-Adjacent Form`) ||
        have($effect`One Very Clear Eye`),
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
      outfit: () => ({
        familiar: $familiar`Left-Hand Man`,
      }),
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
      completed: () => CommunityService.BoozeDrop.isDone(),
      do: (): void => {
        const predictedTestTurns = CommunityService.BoozeDrop.prediction;
        const testTurns = CommunityService.BoozeDrop.actualCost();
        printModtrace(`item drop`);
        printModtrace(`booze drop`);
        print(`Expecting: [${predictedTestTurns}]`, `blue`);
        print(`Took: [${testTurns}]`, `blue`);

        CommunityService.BoozeDrop.run(
          () => logTest(CommunityService.BoozeDrop, testTurns, predictedTestTurns),
          1,
        );
      },
      outfit: {
        modifier: `15 Item Drop, 30 Booze Drop, -100 Gear Drop, -equip broken champagne bottle, switch left-hand man`,
      },
      effects: [
        $effect`Fat Leon's Phat Loot Lyric`,
        $effect`Singer's Faithful Ocelot`,
        $effect`Steely-Eyed Squint`,
        $effect`Spice Haze`,
      ],
      limit: { tries: 1 },
    },
  ],
};

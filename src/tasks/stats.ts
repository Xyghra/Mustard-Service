import { Quest, Task } from "grimoire-kolmafia";
import { print } from "kolmafia";
import { $effect, CommunityService, TrainSet, get, uneffect } from "libram";
import { printModtrace } from "libram/dist/modifier";
import { logTest } from "../lib";

export const muscleQuest: Quest<Task> = {
  name: `Muscle Test`,
  completed: () => CommunityService.Muscle.isDone(),
  tasks: [
    {
      name: `Train!`,
      completed: () => get(`lastTrainsetConfiguration`) !== 0,
      do: () =>
        TrainSet.setConfiguration([
          TrainSet.Station.COAL_HOPPER,
          TrainSet.Station.GAIN_MEAT,
          TrainSet.Station.TOWER_FIZZY,
          TrainSet.Station.CANDY_FACTORY,
          TrainSet.Station.ORE_HOPPER,
          TrainSet.Station.GRAIN_SILO,
          TrainSet.Station.VIEWING_PLATFORM,
          TrainSet.Station.TRACKSIDE_DINER,
        ]),
    },
    {
      name: `Muscle Test`,
      prepare: () =>
        [
          $effect`Ur-Kel's Aria of Annoyance`,
          $effect`Fat Leon's Phat Loot Lyric`,
          $effect`Aloysius' Antiphon of Aptitude`,
        ].forEach((ef) => uneffect(ef)),
      completed: () => CommunityService.Muscle.isDone(),
      do: (): void => {
        const testTurns = CommunityService.Muscle.actualCost();
        const predictedTestTurns = CommunityService.Muscle.prediction;
        printModtrace(`muscle`);
        printModtrace(`muscle percent`);
        print(`Expecting: [${predictedTestTurns}]`, `blue`);
        print(`Took: [${testTurns}]`, `blue`);

        CommunityService.Muscle.run(
          () => logTest(CommunityService.Muscle, testTurns, predictedTestTurns),
          1,
        );
      },
      outfit: {
        modifier: `Muscle, switch left-hand man`,
      },
      effects: [
        $effect`Big`,
        $effect`Go Get 'Em, Tiger!`,
        $effect`Quiet Determination`,
        $effect`Rage of the Reindeer`,
        $effect`Song of Bravado`,
        $effect`Stevedave's Shanty of Superiority`,
        $effect`Seal Clubbing Frenzy`,
        $effect`Patience of the Tortoise`,
      ],
      limit: { tries: 1 },
    },
  ],
};

export const mystQuest: Quest<Task> = {
  name: `Mysticality Test`,
  completed: () => CommunityService.Mysticality.isDone(),
  tasks: [
    {
      name: `Mysticality Test`,
      completed: () => CommunityService.Mysticality.isDone(),
      do: (): void => {
        const testTurns = CommunityService.Mysticality.actualCost();
        const predictedTestTurns = CommunityService.Mysticality.prediction;
        printModtrace(`mysticality`);
        printModtrace(`mysticality percent`);
        print(`Expecting: [${predictedTestTurns}]`, `blue`);
        print(`Took: [${testTurns}]`, `blue`);

        CommunityService.Mysticality.run(
          () => logTest(CommunityService.Mysticality, testTurns, predictedTestTurns),
          1,
        );
      },
      outfit: {
        modifier: `Mysticality, switch left-hand man`,
      },
      post: () => uneffect($effect`The Magical Mojomuscular Melody`),
      effects: [
        $effect`Big`,
        $effect`Glittering Eyelashes`,
        $effect`The Magical Mojomuscular Melody`,
        $effect`Saucemastery`,
        $effect`Stevedave's Shanty of Superiority`,
        $effect`Quiet Judgement`,
        $effect`Song of Bravado`,
        $effect`Pasta Oneness`,
      ],
      limit: { tries: 1 },
    },
  ],
};

export const moxQuest: Quest<Task> = {
  name: `Moxie Test`,
  completed: () => CommunityService.Moxie.isDone(),
  tasks: [
    {
      name: `Moxie Test`,
      completed: () => CommunityService.Moxie.isDone(),
      do: (): void => {
        const testTurns = CommunityService.Moxie.actualCost();
        const predictedTestTurns = CommunityService.Moxie.prediction;
        printModtrace(`moxie`);
        printModtrace(`moxie percent`);
        print(`Expecting: [${predictedTestTurns}]`, `blue`);
        print(`Took: [${testTurns}]`, `blue`);

        CommunityService.Moxie.run(
          () => logTest(CommunityService.Moxie, testTurns, predictedTestTurns),
          1,
        );
      },
      outfit: {
        modifier: `Moxie, switch left-hand man`,
      },
      effects: [
        $effect`Big`,
        $effect`Butt-Rock Hair`,
        $effect`Disco Fever`,
        $effect`Quiet Desperation`,
        $effect`Song of Bravado`,
        $effect`Stevedave's Shanty of Superiority`,
        $effect`Blubbered Up`,
        $effect`Mariachi Mood`,
        $effect`Disco State of Mind`,
        $effect`The Moxious Madrigal`,
      ],
      limit: { tries: 1 },
    },
  ],
};

export const hpQuest: Quest<Task> = {
  name: `HP Test`,
  completed: () => CommunityService.HP.isDone(),
  tasks: [
    {
      name: `HP Test`,
      completed: () => CommunityService.HP.isDone(),
      do: (): void => {
        const testTurns = CommunityService.HP.actualCost();
        const predictedTestTurns = CommunityService.HP.prediction;
        printModtrace(`maximum hp`);
        printModtrace(`maximum hp percent`);
        print(`Expecting: [${predictedTestTurns}]`, `blue`);
        print(`Took: [${testTurns}]`, `blue`);

        CommunityService.HP.run(
          () => logTest(CommunityService.HP, testTurns, predictedTestTurns),
          1,
        );
      },
      outfit: {
        modifier: `HP, switch left-hand man`,
      },
      effects: [
        $effect`Big`,
        $effect`Go Get 'Em, Tiger!`,
        $effect`Reptilian Fortitude`,
        $effect`Quiet Determination`,
        $effect`Song of Bravado`,
        $effect`Stevedave's Shanty of Superiority`,
        $effect`Saucemastery`,
        $effect`Seal Clubbing Frenzy`,
        $effect`Patience of the Tortoise`,
      ],
      limit: { tries: 1 },
    },
  ],
};

import { Quest, Task } from "grimoire-kolmafia";
import { print } from "kolmafia";
import { $effect, CommunityService, ensureEffect, get, set, uneffect } from "libram";
import { printModtrace } from "libram/dist/modifier";

export const muscleQuest: Quest<Task> = {
  name: `Muscle Test`,
  completed: () => CommunityService.Muscle.isDone(),
  tasks: [
    {
      name: `Muscle Test`,
      prepare: (): void => {
        [$effect`Ur-Kel's Aria of Annoyance`, $effect`Fat Leon's Phat Loot Lyric`].every((ef) =>
          uneffect(ef)
        );
        [
          $effect`Big`,
          $effect`Go Get 'Em\, Tiger!`,
          $effect`Quiet Determination`,
          $effect`Rage of the Reindeer`,
          $effect`Song of Bravado`,
          $effect`Stevedave's Shanty of Superiority`,
        ].forEach((ef) => ensureEffect(ef));
      },
      completed: () => CommunityService.Muscle.isDone(),
      do: (): void => {
        const testTurns = CommunityService.Muscle.actualCost();
        const predictedTestTurns = CommunityService.Muscle.prediction;
        printModtrace(`muscle`);
        printModtrace(`muscle percent`);
        print(`Expecting: [${predictedTestTurns}]`, `blue`);
        print(`Took: [${testTurns}]`, `blue`);

        CommunityService.Muscle.run(
          () =>
            set(
              `_mustardServiceTests`,
              `${get(`_mustardServiceTests`)},${testTurns} [Expected: ${predictedTestTurns}]`
            ),
          1
        );
      },
      outfit: {
        modifier: `Muscle`,
      },
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
      prepare: () =>
        [
          $effect`Big`,
          $effect`Glittering Eyelashes`,
          $effect`The Magical Mojomuscular Melody`,
          $effect`Saucemastery`,
          $effect`Stevedave's Shanty of Superiority`,
          $effect`Quiet Judgement`,
          $effect`Song of Bravado`,
        ].forEach((ef) => ensureEffect(ef)),
      do: (): void => {
        const testTurns = CommunityService.Mysticality.actualCost();
        const predictedTestTurns = CommunityService.Mysticality.prediction;
        printModtrace(`mysticality`);
        printModtrace(`mysticality percent`);
        print(`Expecting: [${predictedTestTurns}]`, `blue`);
        print(`Took: [${testTurns}]`, `blue`);

        CommunityService.Mysticality.run(
          () =>
            set(
              `_mustardServiceTests`,
              `${get(`_mustardServiceTests`)},${testTurns} [Expected: ${predictedTestTurns}]`
            ),
          1
        );
      },
      outfit: { modifier: `Mysticality` },
      post: () => uneffect($effect`The Magical Mojomuscular Melody`),
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
      prepare: () =>
        [
          $effect`Big`,
          $effect`Butt-Rock Hair`,
          $effect`Disco Fever`,
          $effect`Quiet Desperation`,
          $effect`Song of Bravado`,
          $effect`Stevedave's Shanty of Superiority`,
        ].forEach((ef) => ensureEffect(ef)),
      do: (): void => {
        const testTurns = CommunityService.Moxie.actualCost();
        const predictedTestTurns = CommunityService.Moxie.prediction;
        printModtrace(`moxie`);
        printModtrace(`moxie percent`);
        print(`Expecting: [${predictedTestTurns}]`, `blue`);
        print(`Took: [${testTurns}]`, `blue`);

        CommunityService.Moxie.run(
          () =>
            set(
              `_mustardServiceTests`,
              `${get(`_mustardServiceTests`)},${testTurns} [Expected: ${predictedTestTurns}]`
            ),
          1
        );
      },
      outfit: { modifier: `Moxie` },
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
      prepare: () =>
        [
          $effect`Big`,
          $effect`Go Get 'Em\, Tiger!`,
          $effect`Reptilian Fortitude`,
          $effect`Quiet Determination`,
          $effect`Song of Bravado`,
          $effect`Stevedave's Shanty of Superiority`,
          $effect`Saucemastery`,
          $effect`Seal Clubbing Frenzy`,
        ].forEach((ef) => ensureEffect(ef)),
      completed: () => CommunityService.HP.isDone(),
      do: (): void => {
        const testTurns = CommunityService.HP.actualCost();
        const predictedTestTurns = CommunityService.HP.prediction;
        printModtrace(`maximum hp`);
        printModtrace(`maximim hp percent`);
        print(`Expecting: [${predictedTestTurns}]`, `blue`);
        print(`Took: [${testTurns}]`, `blue`);

        CommunityService.HP.run(
          () =>
            set(
              `_mustardServiceTests`,
              `${get(`_mustardServiceTests`)},${testTurns} [Expected: ${predictedTestTurns}]`
            ),
          1
        );
      },
      outfit: { modifier: `HP` },
      limit: { tries: 1 },
    },
  ],
};

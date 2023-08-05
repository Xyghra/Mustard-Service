import { CombatStrategy, Quest, Task } from "grimoire-kolmafia";
import { cliExecute, myBasestat, print, retrieveItem, takeStorage, use, useSkill } from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $location,
  $skill,
  $stat,
  Clan,
  CommunityService,
  get,
  have,
  Macro,
} from "libram";
import { printModtrace } from "libram/dist/modifier";
import { args, logTest } from "../lib";

export const sdmgQuest: Quest<Task> = {
  name: `Spell Damage Test`,
  completed: () => CommunityService.SpellDamage.isDone(),
  tasks: [
    {
      name: `Simmer`,
      completed: () => have($effect`Simmering`),
      do: () => useSkill(1, $skill`Simmer`),
      limit: { tries: 1 },
    },
    {
      name: `Pull!`,
      completed: () =>
        have($item`Staff of Simmering Hatred`) ||
        have($item`tobiko marble soda`) ||
        have($effect`Pisces in the Skyces`) ||
        get(`_roninStoragePulls`).split(`,`).length === 5,
      do: () =>
        myBasestat($stat`Mysticality`) >= 125
          ? takeStorage(1, $item`Staff of Simmering Hatred`)
          : takeStorage(1, $item`tobiko marble soda`),
    },
    {
      name: `Tobiko Marble Soda`,
      completed: () => have($effect`Pisces in the Skyces`) || !have($item`tobiko marble soda`),
      do: () => use(1, $item`tobiko marble soda`),
    },
    {
      name: `Obsidian Nutcracker`,
      completed: () => have($item`Staff of Simmering Hatred`) || have($item`obsidian nutcracker`),
      do: () => retrieveItem(1, $item`obsidian nutcracker`),
    },
    {
      name: `Inner Elf`,
      prepare: (): Clan => Clan.join(`Beldungeon`),
      completed: () =>
        args.fam ||
        !have($familiar`Machine Elf`) ||
        have($effect`Inner Elf`) ||
        get(`_snokebombUsed`) >= 3,
      do: $location`The Slime Tube`,
      outfit: {
        familiar: $familiar`Machine Elf`,
      },
      choices: { 326: 1 },
      combat: new CombatStrategy().macro(Macro.trySkill($skill`Snokebomb`).abort()),
    },
    {
      name: `Spell Damage Poolbuff`,
      prepare: () => Clan.join(`Bonus Adventures from Hell`),
      completed: () => have($effect`Mental A-cue-ity`),
      do: () => cliExecute(`pool 2`),
    },
    {
      name: `Spell Damage Test`,
      completed: () => CommunityService.SpellDamage.isDone(),
      do: (): void => {
        const predictedTestTurns = CommunityService.SpellDamage.prediction;
        const testTurns = CommunityService.SpellDamage.actualCost();
        printModtrace(`spell damage`);
        printModtrace(`spell damage percent`);
        print(`Expecting: [${predictedTestTurns}]`, `blue`);
        print(`Took: [${testTurns}]`, `blue`);

        CommunityService.SpellDamage.run(
          () => logTest(CommunityService.SpellDamage, testTurns, predictedTestTurns),
          37
        );
      },
      outfit: {
        modifier: `spell damage, switch left-hand man`,
      },
      effects: [
        $effect`Song of Sauce`,
        $effect`Carol of the Hells`,
        $effect`Jackasses' Symphony of Destruction`,
        $effect`Arched Eyebrow of the Archmage`,
      ],
      limit: { tries: 1 },
    },
  ],
};

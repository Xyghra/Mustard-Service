import { CombatStrategy, Quest, Task } from "grimoire-kolmafia";
import {
  Class,
  cliExecute,
  myClass,
  myMaxhp,
  print,
  restoreHp,
  use,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $class,
  $effect,
  $familiar,
  $item,
  $location,
  $skill,
  Clan,
  CommunityService,
  CursedMonkeyPaw,
  Macro,
  SongBoom,
  get,
  have,
} from "libram";
import { printModtrace } from "libram/dist/modifier";
import { args, logTest } from "../lib";

export const wdmgQuest: Quest<Task> = {
  name: `Weapon Damage Test`,
  completed: () => CommunityService.WeaponDamage.isDone(),
  tasks: [
    {
      name: `Pool Buff`,
      prepare: () => Clan.join(`Bonus Adventures from Hell`),
      completed: () => have($effect`Billiards Belligerence`),
      do: () => cliExecute(`pool 1`),
    },
    {
      name: `Boombox`,
      completed: () =>
        get(`_boomBoxSongsLeft`) <= 2 || SongBoom.song() === `These Fists Were Made for Punchin'`,
      do: () => SongBoom.setSong(`These Fists Were Made for Punchin'`),
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
        weapon: $item.none,
        offhand: $item.none,
        familiar: $familiar`Machine Elf`,
      },
      choices: { 326: 1 },
      combat: new CombatStrategy().autoattack(Macro.trySkill($skill`Snokebomb`).abort()),
    },
    {
      name: `Deep Dark Visions`,
      prepare: () => restoreHp(myMaxhp()),
      completed: () => have($effect`Visions of the Deep Dark Deeps`),
      do: () => useSkill(1, $skill`Deep Dark Visions`),
      outfit: {
        modifier: `spooky res`,
      },
    },
    {
      name: `Barrel Shrine`,
      completed: () => myClass() !== Class.get(`Seal Clubber`) || get(`_barrelPrayer`),
      do: (): void => {
        visitUrl(`da.php?barrelshrine=1`);
        visitUrl(`choice.php?whichchoice=1100&option=4`);
      },
    },
    {
      name: `Corrupted Marrow`,
      completed: () => have($effect`Cowrruption`) || !have($item`corrupted marrow`),
      do: () => use(1, $item`corrupted marrow`),
    },
    {
      name: `Imported Taffy`,
      completed: () => have($effect`Imported Strength`) || !have($item`imported taffy`),
      do: () => use(1, $item`imported taffy`),
    },
    {
      name: `Red Eye`,
      completed: () => have($effect`Seeing Red`) || !have($item`red eye`),
      do: () => use(1, $item`red eye`),
    },
    {
      name: `100% Familiar wish for Pyramid Power`,
      completed: () => !args.fam || get(`_genieWishesUsed`) >= 3 || have($effect`Pyramid Power`),
      do: () => CursedMonkeyPaw.wishFor($effect`Pyramid Power`),
    },
    {
      name: `Weapon Damage Test`,
      completed: () => CommunityService.WeaponDamage.isDone(),
      do: (): void => {
        const predictedTestTurns = CommunityService.WeaponDamage.prediction;
        const testTurns = CommunityService.WeaponDamage.actualCost();
        printModtrace(`weapon damage`);
        printModtrace(`weapon damage percent`);

        if (!args.fam && testTurns > 1) {
          print(`This is annoying, how sad! Manual or fix`);
        }

        print(`Expecting: [${predictedTestTurns}]`, `blue`);
        print(`Took: [${testTurns}]`, `blue`);

        CommunityService.WeaponDamage.run(
          () => logTest(CommunityService.WeaponDamage, testTurns, predictedTestTurns),
          args.fam ? 11 : 1
        );
      },
      outfit: {
        weapon: $item`candy cane sword cane`,
        modifier: `1 weapon dmg percent, 0.9 weapon dmg, switch left-hand man `,
      },
      effects: [
        $effect`Bow-Legged Swagger`,
        $effect`Scowl of the Auk`,
        $effect`Rage of the Reindeer`,
        $effect`Song of the North`,
        $effect`Carol of the Bulls`,
        $effect`Tenacity of the Snapper`,
        $effect`Jackasses' Symphony of Destruction`,
        myClass() === $class`Turtle Tamer`
          ? $effect`Blessing of the War Snapper`
          : $effect`Disdain of the War Snapper`,
        $effect`Frenzied, Bloody`,
      ],
      limit: { tries: 1 },
    },
  ],
};

import { Quest, Task } from "grimoire-kolmafia";
import {
  autosell,
  availableAmount,
  canadiaAvailable,
  changeMcd,
  cliExecute,
  create,
  currentMcd,
  getWorkshed,
  myHash,
  myMeat,
  nowToInt,
  retrieveItem,
  reverseNumberology,
  runChoice,
  takeStorage,
  use,
  visitUrl,
} from "kolmafia";
import { $item, $location, AutumnAton, Clan, SongBoom, TrainSet, get, have, set } from "libram";
import { guildQuest, guildURL, loss, oomfieOutfit } from "../lib";

export const runStartQuest: Quest<Task> = {
  name: `Post-Ascension to Pre-Skeletons`,
  completed: () =>
    get(guildQuest) === `started` || get(guildQuest) === `step1` || get(guildQuest) === `finished`,
  tasks: [
    loss,
    {
      name: `Fall Guy!`,
      completed: () => !AutumnAton.available(),
      do: (): void => {
        AutumnAton.sendTo($location`The Sleazy Back Alley`);
      },
    },
    {
      name: `Pull Pulls`,
      completed: () => get(`_roninStoragePulls`).split(`,`).length === 4,
      do: () =>
        [
          $item`Calzone of Legend`,
          $item`Pizza of Legend`,
          $item`Stick-Knife of Loathing`,
          $item`wasabi marble soda`,
        ].forEach((i) => takeStorage(1, i)),
    },
    {
      name: `Setting Properties`,
      completed: () => get(`_mustardServiceTime`) !== ``,
      do: (): void => {
        set(`_mustardServiceTime`, `${nowToInt()}`);
      },
    },
    {
      name: `Numberology Attempt`,
      ready: () =>
        get(`_universeCalculated`) === 0 && Object.keys(reverseNumberology()).includes(`69`),
      completed: () => get(`_universeCalculated`) >= 1,
      do: () => cliExecute(`numberology 69`),
      limit: { tries: 1 },
    },
    {
      name: `Select S.I.T. Degree`,
      completed: () => get(`_sitCourseCompleted`),
      do: (): void => {
        visitUrl(`inv_use.php?pwd=${myHash()}&which=3&whichitem=11116`);
        runChoice(1);
      },
    },
    {
      name: `Grab Cowboy Boots`,
      completed: () => have($item`your cowboy boots`),
      do: (): void => {
        visitUrl(`place.php?whichplace=town_right&action=townright_ltt`);
        runChoice(3);
      },
    },
    {
      name: `Visit the Council`,
      completed: () => get(`lastCouncilVisit`) > 0,
      do: () => visitUrl(`council.php`),
    },
    {
      name: `Open Letter`,
      prepare: () => visitUrl(`tutorial.php?action=toot`),
      completed: () =>
        !have($item`letter from King Ralph XI`) && get(`questM05Toot`) === `finished`,
      do: () => use(1, $item`letter from King Ralph XI`),
    },
    {
      name: `Get that bag oomfie!!!`,
      completed: () => !have($item`pork elf goodies sack`),
      do: () => use(1, $item`pork elf goodies sack`),
    },
    {
      name: `Sell Non-porquoise`,
      completed: () => [$item`baconstone`, $item`hamethyst`].every((I) => !have(I)),
      do: () =>
        [$item`baconstone`, $item`hamethyst`].forEach((I) => autosell(availableAmount(I), I)),
    },
    {
      name: `Sell Porquoise`,
      completed: () => !have($item`porquoise`) || myMeat() >= 250,
      do: () => autosell(1, $item`porquoise`),
    },
    {
      name: `Acquire Buff Tools`,
      completed: () =>
        [$item`toy accordion`, $item`turtle totem`, $item`saucepan`].every((i) => have(i)),
      do: () =>
        [$item`toy accordion`, $item`turtle totem`, $item`saucepan`].forEach((i) =>
          retrieveItem(i)
        ),
      outfit: {
        pants: $item`designer sweatpants`,
      },
    },
    {
      name: `Open Astral Drinks`,
      completed: () => !have($item`astral six-pack`),
      do: () => use(1, $item`astral six-pack`),
    },
    {
      name: `Open Skeleton Store`,
      completed: () => get(`skeletonStoreAvailable`),
      do: (): void => {
        visitUrl(`shop.php?whichshop=meatsmith&action=talk`);
        visitUrl(`choice.php?pwd=${myHash}&whichchoice=1059&option=1`);
      },
    },
    {
      name: `Clip-Art Summons`,
      completed: () => get(`_clipartSummons`) >= 2,
      do: (): void => {
        create(1, $item`borrowed time`);
        create(1, $item`box of Familiar Jacks`);
      },
    },
    {
      name: `Borrow Time`,
      completed: () => get(`_borrowedTimeUsed`),
      do: () => use(1, $item`borrowed time`),
    },
    {
      name: `Mummery`,
      completed: () => get(`_mummeryUses`) !== ``,
      do: () => use(1, $item`mumming trunk`),
      choices: { 1071: 3 },
      outfit: () => oomfieOutfit(),
    },
    {
      name: `SongBoom™`,
      completed: () => SongBoom.song() === `Total Eclipse of Your Meat`,
      do: () => SongBoom.setSong(`Total Eclipse of Your Meat`),
    },
    {
      name: `Saber Familiar`,
      completed: () => get(`_saberMod`) !== 0,
      do: (): void => {
        visitUrl(`main.php?action=may4`);
        runChoice(4);
      },
    },
    {
      name: `Create Ebonee Epee`,
      completed: () => have($item`ebony epee`),
      do: (): void => {
        visitUrl(`shop.php?whichshop=lathe`);
        retrieveItem(1, $item`ebony epee`);
      },
    },
    {
      name: `DRINKME`,
      prepare: () => Clan.join(`Bonus Adventures from Hell`),
      completed: () => get(`_lookingGlass`),
      do: () => visitUrl(`clan_viplounge.php?action=lookingglass&whichfloor=2`),
    },
    {
      name: `Enable Reverser`,
      completed: () => get(`backupCameraReverserEnabled`),
      do: () => cliExecute(`backupcamera reverser`),
    },
    {
      name: `Mind Control`,
      ready: () => canadiaAvailable(),
      completed: () => currentMcd() === 11,
      do: () => changeMcd(11),
    },
    {
      name: `Boxing Daycare Free Scavenge`,
      completed: () => get(`_daycareGymScavenges`) >= 1,
      do: (): void => {
        visitUrl(`place.php?whichplace=town_wrong&action=townwrong_boxingdaycare`);
        runChoice(3);
        runChoice(2);
      },
      outfit: {
        offhand: $item`familiar scrapbook`,
      },
      choices: { 1334: 2, 1336: 1 },
    },
    {
      name: `Arrange Trainset`,
      prepare: () => use(1, $item`model train set`),
      completed: () =>
        getWorkshed() === $item`model train set` && get(`trainsetConfiguration`) !== ``,
      do: () =>
        TrainSet.setConfiguration([
          TrainSet.Station.COAL_HOPPER,
          TrainSet.Station.BRAWN_SILO,
          TrainSet.Station.VIEWING_PLATFORM,
          TrainSet.Station.WATER_BRIDGE,
          TrainSet.Station.GAIN_MEAT,
          TrainSet.Station.TOWER_FIZZY,
          TrainSet.Station.CANDY_FACTORY,
          TrainSet.Station.TRACKSIDE_DINER,
        ]),
    },
    {
      name: `Start Guild Unlock`,
      completed: () => get(guildQuest) === `started`,
      do: (): void => {
        visitUrl(guildURL);
        visitUrl(`guild.php?place=challenge`);
      },
    },
  ],
};

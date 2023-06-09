import { Quest, Task } from "grimoire-kolmafia";
import {
  autosell,
  availableAmount,
  canadiaAvailable,
  changeMcd,
  cliExecute,
  currentMcd,
  equip,
  getWorkshed,
  myFamiliar,
  myHash,
  nowToInt,
  retrieveItem,
  reverseNumberology,
  runChoice,
  takeStorage,
  use,
  useFamiliar,
  visitUrl,
} from "kolmafia";
import {
  $familiar,
  $item,
  $location,
  $slot,
  AutumnAton,
  Clan,
  get,
  have,
  set,
  SongBoom,
  TrainSet,
  withChoice,
} from "libram";
import { guildQuest, guildURL } from "../lib";

const floundryItem = $item`fish hatchet`;
const famRoute = $familiar`Melodramedary`;

export const runStartQuest: Quest<Task> = {
  name: `Post-Ascension to Pre-Skeletons`,
  completed: () =>
    get(guildQuest) === `started` || get(guildQuest) === `step1` || get(guildQuest) === `finished`,
  tasks: [
    {
      name: `Fall Guy!`,
      completed: () => !AutumnAton.available(),
      do: (): void => {
        AutumnAton.upgrade();
        AutumnAton.sendTo($location`The Sleazy Back Alley`);
      },
    },
    {
      name: `Pull Pulls`,
      completed: () => get(`_roninStoragePulls`).split(`,`).length === 5,
      do: () =>
        [
          $item`Calzone of Legend`,
          $item`Pizza of Legend`,
          $item`Stick-Knife of Loathing`,
          $item`wasabi marble soda`,
          $item`tobiko marble soda`,
        ].forEach((i) => takeStorage(1, i)),
    },
    {
      name: `Setting Properties`,
      completed: () => get(`_mustardServiceTime`) !== ``,
      do: (): void => {
        set(`_mustardServiceDiner`, `false`);
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
      name: `Acquire Floundry Item`,
      prepare: () => Clan.join(`Floundry`),
      completed: () => get(`_floundryItemCreated`),
      do: () => retrieveItem(1, floundryItem),
      post: () => Clan.join(`Bonus Adventures from Hell`),
    },

    {
      name: `Select S.I.T. Degree`,
      completed: () => get(`_sitCourseCompleted`),
      do: (): void => {
        visitUrl(`inv_use.php?pwd=${myHash()}&which=3&whichitem=11116`);
        runChoice(2);
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
      name: `Sell Gems`,
      prepare: () => visitUrl(`tutorial.php?action=toot`),
      completed: () =>
        [$item`letter from King Ralph XI`, $item`baconstone`, $item`hamethyst`].every(
          (i) => !have(i)
        ) && get(`questM05Toot`) === `finished`,
      do: (): void => {
        use(1, $item`letter from King Ralph XI`);
        use(1, $item`pork elf goodies sack`);
        [$item`baconstone`, $item`hamethyst`].forEach((i) => autosell(availableAmount(i), i));
        autosell(availableAmount($item`porquoise`) - 2, $item`porquoise`);
      },
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
      completed: () => get(`_clipartSummons`) >= 3,
      do: (): void => {
        retrieveItem(2, $item`borrowed time`);
        retrieveItem(1, $item`box of Familiar Jacks`);
      },
    },
    {
      name: `Borrow Time`,
      completed: () => get(`_borrowedTimeUsed`),
      do: () => use(1, $item`borrowed time`),
    },
    {
      name: `Equip Familiar`,
      completed: () => myFamiliar() !== $familiar.none,
      do: (): void => {
        useFamiliar(famRoute);
        equip($slot`familiar`, $item`tiny stillsuit`);
      },
    },
    {
      name: `Mummery`,
      completed: () => get(`_mummeryUses`) !== ``,
      do: (): void => {
        withChoice(1071, 3, () => use(1, $item`mumming trunk`));
      },
    },
    {
      name: `SongBoom™`,
      completed: () => SongBoom.song() === `Total Eclipse of Your Meat`,
      do: () => SongBoom.setSong(`Total Eclipse of Your Meat`),
    },
    {
      name: `Configure Saber`,
      completed: () => get(`_saberMod`) !== 0,
      do: () => cliExecute(`saber familiar`),
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
      name: `Boxing Daycare Freescavenge`,
      completed: () => get(`_daycareGymScavenges`) >= 1,
      do: () => cliExecute(`daycare scavenge`),
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

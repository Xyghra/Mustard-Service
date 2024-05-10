import { CombatStrategy, Quest, Task } from "grimoire-kolmafia";
import {
  Item,
  abort,
  adv1,
  autosell,
  availableAmount,
  canAdventure,
  canadiaAvailable,
  changeMcd,
  cliExecute,
  create,
  currentMcd,
  drink,
  getWorkshed,
  haveEquipped,
  knollAvailable,
  myAdventures,
  myClass,
  myFamiliar,
  myHash,
  myMaxhp,
  myMeat,
  nowToInt,
  restoreHp,
  retrieveItem,
  reverseNumberology,
  runChoice,
  takeStorage,
  use,
  visitUrl,
} from "kolmafia";
import {
  $class,
  $effect,
  $familiar,
  $item,
  $location,
  $monster,
  $skill,
  AprilingBandHelmet,
  AutumnAton,
  Cartography,
  Clan,
  CombatLoversLocket,
  CommunityService,
  Macro,
  TrainSet,
  ensureEffect,
  get,
  getKramcoWandererChance,
  have,
  set,
  uneffect,
} from "libram";
import {
  args,
  barrelItems,
  barrelSmashing,
  guildQuest,
  guildURL,
  guildZone,
  juneCleaverTask,
  loss,
  oomfieOutfit,
} from "../lib";

function prequelPulls(): Item[] {
  return [
    $item`Calzone of Legend`,
    $item`Pizza of Legend`,
    $item`Stick-Knife of Loathing`,
    args.fam ? $item`wasabi marble soda` : $item`Great Wolf's beastly trousers`,
  ];
}

function degreeTask(degreeChoice: "Psychogeologist" | "Insectologist" | "Cryptobotanist"): Task {
  return {
    name: `S.I.T Degree: ${degreeChoice}!`,
    completed: () => get(`_sitCourseCompleted`),
    do: () => use(1, $item`S.I.T. Course Completion Certificate`),
    choices: () => ({
      1494: degreeChoice === `Psychogeologist` ? 1 : degreeChoice === `Insectologist` ? 2 : 3,
    }),
  };
}

function latheItemTask(item: Item): Task {
  if (item !== $item`ebony epee` && item !== $item`weeping willow wand`) abort(`Invalid Lathe!`);
  return {
    name: `Lathe: Create ${item.name}!`,
    prepare: () => visitUrl(`shop.php?whichshop=lathe`),
    completed: () => have(item),
    do: () => create(1, item),
  };
}

export const prequelQuest: Quest<Task> = {
  name: `Prequel Tasks!`,
  completed: () => CommunityService.CoilWire.isDone(),
  tasks: [
    {
      name: `Begin Timing!`,
      completed: () => get(`_mustardServiceTime`, ``) !== ``,
      do: () => set(`_mustardServiceTime`, nowToInt()),
    },
    degreeTask(`Psychogeologist`),
    latheItemTask($item`weeping willow wand`),
    {
      name: `Fall Guy: Autumn Leaf`,
      ready: () => AutumnAton.available(),
      completed: () => have($item`autumn leaf`),
      do: (): void => {
        AutumnAton.sendTo($location`The Sleazy Back Alley`);
      },
    },
    {
      name: `Pull!`,
      completed: () =>
        prequelPulls().every((I) => get(`_roninStoragePulls`).split(`,`).includes(`${I.id}`)),
      do: () => prequelPulls().forEach((I) => takeStorage(1, I)),
    },
    {
      name: `Numberology Attempt`,
      ready: () =>
        Object.keys(reverseNumberology()).includes(`69`) && have($skill`Calculate the Universe`),
      completed: () => get(`_universeCalculated`) >= 1,
      do: () => cliExecute(`numberology 69`),
      limit: { tries: 1 },
    },
    {
      name: `Vote! (Seal Clubber)`,
      ready: () => myClass() === $class`Seal Clubber`,
      completed: () => true,
      do: () => cliExecute(`doublevote 3`),
    },
    {
      name: `Get Cowboy Boots!`,
      ready: () => get(`telegraphOfficeAvailable`),
      completed: () => have($item`your cowboy boots`),
      do: (): void => {
        visitUrl(`place.php?whichplace=town_right&action=townright_ltt`);
        runChoice(3);
      },
    },
    {
      name: `Vote!`,
      completed: () => get(`_voteModifier`) !== ``,
      do: () => {
        visitUrl(`place.php?whichplace=town_right&action=townright_vote`);
        cliExecute(`doublevote 3`);
      },
    },
    {
      name: `Visit the Council`,
      completed: () => get(`lastCouncilVisit`) > 0,
      do: () => visitUrl(`council.php`),
    },
    {
      name: `Open Gem Letter!`,
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
    barrelSmashing,
    {
      name: `Sell Barrel Junk`,
      completed: () => barrelItems.every((I) => !have(I)),
      do: () => barrelItems.forEach((I) => autosell(I, availableAmount(I))),
    },
    {
      name: `Sell Porquoise`,
      completed: () => myMeat() >= 81,
      do: () => autosell(1, $item`porquoise`),
    },
    {
      name: `Open Astral Drinks!`,
      completed: () => !have($item`astral six-pack`),
      do: () => use(1, $item`astral six-pack`),
    },
    {
      name: `Apriling Band: +combat`,
      ready: () => AprilingBandHelmet.have(),
      completed: () =>
        have($effect`Apriling Band Battle Cadence`) || !AprilingBandHelmet.canChangeSong(),
      do: () => AprilingBandHelmet.conduct(`Apriling Band Battle Cadence`),
    },
    {
      name: `Open Skeleton Store!`,
      completed: () => get(`skeletonStoreAvailable`),
      do: (): void => {
        visitUrl(`shop.php?whichshop=meatsmith&action=talk`);
        visitUrl(`choice.php?pwd=${myHash}&whichchoice=1059&option=1`);
      },
    },
    {
      name: `Summon Borrowed Time!`,
      completed: () => get(`_borrowedTimeUsed`) || have($item`borrowed time`),
      do: () => create(1, $item`borrowed time`),
    },
    {
      name: `Use Borrowed Time!`,
      completed: () => !have($item`borrowed time`) || get(`_borrowedTimeUsed`),
      do: () => use(1, $item`borrowed time`),
    },
    {
      name: `Mummery!`,
      completed: () => get(`_mummeryUses`) !== ``,
      do: () => use(1, $item`mumming trunk`),
      choices: () => ({ 1071: 3 }),
      outfit: () => oomfieOutfit(),
    },
    {
      name: `Saber: Familiar!`,
      ready: () => have($item`Fourth of May Cosplay Saber`),
      completed: () => get(`_saberMod`) !== 0,
      do: () => cliExecute(`saber familiar`),
    },
    {
      name: `Mind Control Device!`,
      ready: () => canadiaAvailable() || have($item`detuned radio`),
      completed: () => currentMcd() === (canadiaAvailable() ? 11 : 10),
      do: () => changeMcd(canadiaAvailable() ? 11 : 10),
    },
    {
      name: `Boxing Daycare: Free Scavenge!`,
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
      ready: () => have($item`model train set`),
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
      completed: () => get(guildQuest) !== `unstarted`,
      do: (): void => {
        visitUrl(guildURL);
        visitUrl(`guild.php?place=challenge`);
      },
    },
    loss,
    juneCleaverTask,
    {
      name: `Obtain: Red Rocket!`,
      prepare: () => Clan.join(`Bonus Adventures from Hell`),
      completed: () => have($item`red rocket`) || have($effect`Ready to Eat`),
      do: () => retrieveItem(1, $item`red rocket`),
    },
    {
      name: `Pre-Coil Kramco Wanderer!`,
      completed: () => getKramcoWandererChance() < 1,
      do: () => guildZone,
      outfit: () =>
        oomfieOutfit({
          offhandOverride: $item`Kramco Sausage-o-Matic™`,
          modesOverride: {
            parka: `kachungasaur`,
            backupcamera: `meat`,
          },
        }),
      combat: new CombatStrategy().autoattack(() =>
        Macro.tryItem($item`red rocket`)
          .trySkill($skill`Summon Love Gnats`)
          .trySkill($skill`Summon Love Mosquito`)
          .attack()
          .repeat(),
      ),
    },
    {
      name: `May Day!`,
      completed: () => !have($item`MayDay™ supply package`),
      do: () => use(1, $item`MayDay™ supply package`),
    },
    {
      name: `Sell Space Blanket!`,
      completed: () => !have($item`space blanket`),
      do: () => autosell(1, $item`space blanket`),
    },
    {
      name: `Buy: Detuned Radio!`,
      ready: () => knollAvailable(),
      completed: () => have($item`detuned radio`),
      do: () => retrieveItem(1, $item`detuned radio`),
    },
    {
      name: `Buy: Chewing Gum`,
      ready: () => !have($item`turtle totem`) || !have($item`saucepan`),
      completed: () => have($item`chewing gum on a string`),
      do: () =>
        retrieveItem(
          have($item`turtle totem`) || have($item`saucepan`) ? 1 : 2,
          $item`chewing gum on a string`,
        ),
      outfit: () => ({ pants: $item`designer sweatpants` }),
    },
    {
      name: `Buy: Toy Accordion`,
      completed: () => have($item`toy accordion`),
      do: () => retrieveItem(1, $item`toy accordion`),
    },
    {
      name: `Acquire Bufftools`,
      completed: () => have($item`turtle totem`) && have($item`saucepan`),
      do: () =>
        use(availableAmount($item`chewing gum on a string`), $item`chewing gum on a string`),
    },
    {
      name: `Fight: Red Skeleton (Locket)`,
      completed: () => CombatLoversLocket.monstersReminisced().includes($monster`red skeleton`),
      do: () => CombatLoversLocket.reminisce($monster`red skeleton`),
      outfit: () => oomfieOutfit(),
      combat: new CombatStrategy().autoattack(() => Macro.trySkill($skill`Feel Hatred`).abort()),
    },
    {
      name: `Fight: Novelty Tropical Skeleton (Map)`,
      ready: () => get(`lastCopyableMonster`) === $monster`red skeleton`,
      prepare: () => restoreHp(myMaxhp()),
      completed: () => have($effect`Everything Looks Yellow`) && have($item`cherry`),
      do: () =>
        Cartography.mapMonster($location`The Skeleton Store`, $monster`novelty tropical skeleton`),
      combat: new CombatStrategy().autoattack(() =>
        Macro.if_(
          $monster`novelty tropical skeleton`,
          Macro.trySkill($skill`Feel Nostalgic`)
            .trySkill($skill`Spit jurassic acid`)
            .abort(),
        )
          .trySkill($skill`CLEESH`)
          .trySkill($skill`Bowl a Curveball`)
          .abort(),
      ),
      outfit: () =>
        oomfieOutfit({
          hatOverride: $item.none,
          offhandOverride: $item`unbreakable umbrella`,
          shirtOverride: $item`Jurassic Parka`,
          acc1Override: $item`backup camera`,
          acc2Override: $item`your cowboy boots`,
          modesOverride: { parka: `dilophosaur`, umbrella: `broken`, backupcamera: `ml` },
        }),
    },
    {
      name: `Open Red Box!`,
      completed: () => !have($item`red box`),
      do: () => use(1, $item`red box`),
    },
    {
      name: `Purchase Fireworks Hat!`,
      prepare: () => Clan.join(`Bonus Adventures from Hell`),
      completed: () => have($item`sombrero-mounted sparkler`),
      do: () => retrieveItem(1, $item`sombrero-mounted sparkler`),
    },
    {
      name: `Unlock the Guild: Freeruns!`,
      completed: () => get(guildQuest) === `step1` || get(guildQuest) === `finished`,
      do: () => guildZone,
      effects: () => [
        $effect`Musk of the Moose`,
        $effect`Carlweather's Cantata of Confrontation`,
        !args.fam ? $effect`Blood Bond` : $effect`Musk of the Moose`,
        !args.fam ? $effect`Empathy` : $effect`Musk of the Moose`,
      ],
      outfit: () =>
        oomfieOutfit({
          hatOverride: $item`sombrero-mounted sparkler`,
          offhandOverride: $item`familiar scrapbook`,
          acc1Override:
            get(`_reflexHammerUsed`) >= 3 ? $item`backup camera` : $item`Lil' Doctor™ bag`,
          acc2Override:
            have($item`spring shoes`) && !haveEquipped($item`spring shoes`)
              ? $item`spring shoes`
              : undefined,
          familiarOverride: args.fam ? args.familiar : $familiar`Pair of Stomping Boots`,
        }),
      combat: new CombatStrategy().autoattack(() =>
        Macro.externalIf(
          haveEquipped($item`spring shoes`) && !have($effect`Everything Looks Green`),
          Macro.trySkill($skill`Spring Away`),
        )
          .externalIf(myFamiliar() === $familiar`Pair of Stomping Boots`, Macro.runaway().abort())
          .externalIf(haveEquipped($item`Lil' Doctor™ bag`), Macro.trySkill($skill`Reflex Hammer`))
          .trySkill($skill`Feel Hatred`)
          .abort(),
      ),
    },
    {
      name: `Cemetery Unlock`, // Note: Only works for SC probably (lack of testing)
      completed: () => canAdventure($location`The Unquiet Garves`),
      do: (): void => {
        visitUrl(`guild.php?guild=f`);
        visitUrl(`guild.php?place=challenge`);
        visitUrl(`guild.php?place=scg`);
        visitUrl(`guild.php?place=scg`);
      },
    },
    {
      name: `Guarantee 60+ Adventures!`,
      completed: () => myAdventures() >= 60,
      do: (): void => {
        retrieveItem(1, $item`11-leaf clover`);
        use(1, $item`11-leaf clover`);
        adv1($location`The Sleazy Back Alley`);
        ensureEffect($effect`Ode to Booze`);
        drink(1, $item`distilled fortified wine`);
        uneffect($effect`Ode to Booze`);
      },
    },
  ],
};

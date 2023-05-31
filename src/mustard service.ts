import {
  abort,
  adv1,
  autosell,
  availableAmount,
  chew,
  cliExecute,
  drink,
  eat,
  Effect,
  equip,
  equippedItem,
  getProperty,
  haveEffect,
  Item,
  maximize,
  myAdventures,
  myFamiliar,
  myHash,
  myHp,
  myLevel,
  myMaxhp,
  myMaxmp,
  myMp,
  mySpleenUse,
  nowToInt,
  numericModifier,
  print,
  restoreHp,
  retrieveItem,
  runChoice,
  setAutoAttack,
  setCcs,
  setProperty,
  Skill,
  takeStorage,
  toEffect,
  toSkill,
  use,
  useFamiliar,
  useSkill,
  visitUrl,
  writeCcs,
} from "kolmafia";

import {
  $effect,
  $effects,
  $familiar,
  $item,
  $items,
  $location,
  $monster,
  $skill,
  $slot,
  //$slots,
  Clan,
  ensureEffect,
  get,
  getKramcoWandererChance,
  have,
  set,
  uneffect,
} from "libram";
import { CommunityService } from "libram/dist/challengePaths";
import { printModtrace } from "libram/dist/modifier";
import {
  AutumnAton,
  Cartography,
  CombatLoversLocket,
  CursedMonkeyPaw,
  DeckOfEveryCard,
  Latte,
  SongBoom,
  TrainSet,
  Witchess,
} from "libram/dist/resources";
import { currentOutfit, equipOutfit, fallGuy, juneCleaver, preAdventure } from "./lib";

/*
export function cleaver(): void {
  if (get(`_juneCleaverFightsLeft`) === 0) {
    const outfit = currentOutfit();
    equip($slot`weapon`, $item`June cleaver`);
    adv1($location`The Sleazy Back Alley`, -1);
    equipOutfit(outfit);
  }
}
*/

export function kramMode(): void {
  if (getKramcoWandererChance() === 1) {
    const outfit = currentOutfit();
    equip($slot`off-hand`, $item`Kramco Sausage-o-Matic™`);

    const dropZone = $location`The Outskirts of Cobb's Knob`;
    adv1(dropZone, -1, `attack; repeat;`);

    equipOutfit(outfit);
  }
}

export function mpRestore(): void {
  while (myMp() < 100 && myMp() <= 0.85 * myMaxmp()) {
    cliExecute(`restore mp`);
  }
}

export function badJuju(): void {
  if (have($effect`Beaten Up`)) {
    useSkill(1, $skill`Tongue of the Walrus`);
  }
  if (have($effect`Really Quite Poisoned`)) {
    uneffect($effect`Really Quite Poisoned`);
  }
}

export function levellingSlime(): void {
  if (
    myLevel() >= 13 &&
    get(`_snokebombUsed`) === 0 &&
    get(`csServicesPerformed`) === `Coil Wire`
  ) {
    while (!have($effect`Inner Elf`)) {
      print(`Attemping: Levelling Motherslime`, `blue`);
      motherSlime();
    }
  }
}

export function sombreroSwap(): void {
  if (
    have($effect`Spit Upon`) &&
    get(`csServicesPerformed`) === `Coil Wire` &&
    myFamiliar() !== $familiar`Hovering Sombrero` &&
    getProperty(`_mustardServiceStage`) !== `Levelling: DMT`
  ) {
    useFamiliar($familiar`Hovering Sombrero`);
    equip($slot`familiar`, $item`tiny stillsuit`);
  }
}

export function preVenture(): void {
  preAdventure(
    [juneCleaver, pilsners, badJuju, levellingSlime, sombreroSwap, mpRestore, kramMode],
    0.85,
    1
  );
}

/*
export function preAdventure(): void {
  while (myHp() <= 0.85 * myMaxhp()) {
    cliExecute(`restore hp`);
  }
  mpRestore();

  pilsners();
  kramGo();
}

export function currentOutfit(): Item[] {
  const outfit: Item[] = [];
  for (const slot of $slots``) {
    outfit.push(equippedItem(slot));
  }
  return outfit;
}


export function equipOutfit(outfit: Item[]): void {
  for (let i = 0; i < outfit.length; i++) {
    if (!$slots`crown-of-thrones, buddy-bjorn, fakehand`.includes($slots``[i])) {
      equip($slots``[i], outfit[i]);
    }
  }
}
*/

export function deepDarkVisions(): void {
  const outfit = currentOutfit();
  equip($item`Jurassic Parka`);
  cliExecute(`parka ghostasaurus`);
  equip($item`Fourth of May Cosplay Saber`);
  equip($item`cursed monkey's paw`);
  for (const eff of $effects`Astral Shell, Elemental Saucesphere`) {
    if (!have(eff)) {
      ensureEffect(eff);
    }
  }
  if (myHp() <= myMaxhp()) {
    restoreHp(myMaxhp());
  }
  useSkill(1, $skill`Deep Dark Visions`);
  equipOutfit(outfit);
}

export function motherSlime(): void {
  const curFam = myFamiliar();
  useFamiliar($familiar`Machine Elf`);
  equip($slot`familiar`, $item`tiny stillsuit`);
  Clan.join(`beldungeon`);
  setProperty(`choiceAdventure326`, `1`);
  writeCcs(`[default]\nskill snokebomb\nabort`, `mustardservice`);
  setCcs(`mustardservice`);
  adv1($location`The Slime Tube`, -1, `skill snokebomb; abort;`);
  setCcs(`default`);
  useFamiliar(curFam);
}

export function pilsners(): void {
  if (myLevel() >= 11 && availableAmount($item`astral pilsner`) === 6) {
    useSkill(1, $skill`The Ode to Booze`);
    drink(4, $item`astral pilsner`);
  }
}

const famRoute = $familiar`Melodramedary`;
const drinkSockdollager = false;
const floundryItem = $item`fish hatchet`;
const yachtzeeChaining = false;
const scalerZone = $location`The Neverending Party`;

export function preRun(): void {
  print(`Pre Run: Pulling`);
  setAutoAttack(0);
  const pulls = [
    $item`Calzone of Legend`,
    $item`Pizza of Legend`,
    //$item`Deep Dish of Legend`,
    $item`wasabi marble soda`,
    //$item`abstraction: purpose`,
    $item`Stick-Knife of Loathing`,
    $item`tobiko marble soda`,
    //$item`red eye`,
    //$item`Great Wolf's beastly trousers`,
  ];
  for (const pull of pulls) {
    takeStorage(1, pull);
  }

  setProperty(`_mustardServiceDiner`, `false`);
  setProperty(`_mustardServiceStage`, `Set-up and Preparation`);
  setProperty(`_mustardServiceTime`, `${nowToInt()}`);
  setup();
}

//setup and prep
export function setup(): void {
  print(`Beginning Stage 1: Set-up and Preparation`, `blue`);

  equip($slot`pants`, $item`designer sweatpants`);
  cliExecute(`numberology 69`);
  //useSkill(1, $skill`Spirit of Garlic`);

  if (have($item`astral six-pack`)) {
    use(1, $item`astral six-pack`);
  }

  if (!have(floundryItem)) {
    Clan.join(`Floundry`);
    retrieveItem(1, floundryItem);
    //use(1, $item`codpiece`);
    //use(8, $item`bubblin' crude`);
    //autosell(1, $item`oil cap`);
    Clan.join(`Bonus Adventures from Hell`);
  }

  if (!have($skill`Insectologist`)) {
    visitUrl(`inv_use.php?pwd=${myHash()}&which=3&whichitem=11116`);
    runChoice(2);
  }
  if (!have($item`your cowboy boots`)) {
    visitUrl(`place.php?whichplace=town_right&action=townright_ltt`);
    runChoice(3);
  }

  visitUrl(`council.php`);
  visitUrl(`council.php`);
  visitUrl(`tutorial.php?action=toot`);

  if (have($item`letter from King Ralph XI`)) {
    use(1, $item`letter from King Ralph XI`);
    use(1, $item`pork elf goodies sack`);
    for (const gem of $items`baconstone, hamethyst`) {
      autosell(availableAmount(gem), gem);
    }
    if (availableAmount($item`porquoise`) > 2) {
      autosell(availableAmount($item`porquoise`) - 2, $item`porquoise`);
    }
  }

  for (const item of $items`toy accordion, turtle totem, saucepan`) {
    if (!have(item)) {
      retrieveItem(1, item);
    }
  }

  visitUrl(`shop.php?whichshop=meatsmith&action=talk`);
  visitUrl(`choice.php?pwd=${myHash}&whichchoice=1059&option=1`);

  if (!have($item`borrowed time`) && get(`_borrowedTimeUsed`) === false) {
    retrieveItem(2, $item`borrowed time`);
    use(1, $item`borrowed time`);
  }

  if (!have($item`box of Familiar Jacks`)) {
    retrieveItem(1, $item`box of Familiar Jacks`);
  }

  useFamiliar(famRoute);
  equip($slot`familiar`, $item`tiny stillsuit`);

  if (get(`_mummeryUses`) === ``) {
    setProperty(`choiceAdventure1271`, `3`);
    use(1, $item`mumming trunk`);
  }

  if (get(`boomBoxSong`) !== `Total Eclipse of Your Meat`) {
    SongBoom.setSong(`Total Eclipse of Your Meat`);
  }

  if (get(`_saberMod`) === 0) {
    visitUrl(`main.php?action=may4`);
    runChoice(4);
  }
  if (get(`_spinmasterLatheVisited`) === false) {
    visitUrl(`shop.php?whichshop=lathe`);
    retrieveItem(1, $item`ebony epee`);
  }
  if (get(`backupCameraMode`) !== `ml`) {
    visitUrl(`inventory.php?action=bcmode`);
    visitUrl(`choice.php?whichchoice=1449&option=1`);
  }
  if (get(`backupCameraReverserEnabled`) === false) {
    visitUrl(`inventory.php?action=bcmode`);
    visitUrl(`choice.php?whichchoice=1449&option=4`);
  }

  cliExecute(`garden pick`);

  if (get(`_lookingGlass`) === false) {
    if (Clan.get().name !== `Bonus Adventures from Hell`) {
      Clan.join(`Bonus Adventures from Hell`);
    }
    visitUrl(`clan_viplounge.php?action=lookingglass&whichfloor=2`);
  }
  if (AutumnAton.available()) {
    AutumnAton.sendTo($location`The Sleazy Back Alley`);
  }

  if (get(`trainsetConfiguration`) === ``) {
    use(1, $item`model train set`);
    TrainSet.setConfiguration([
      TrainSet.Station.COAL_HOPPER,
      TrainSet.Station.BRAWN_SILO,
      TrainSet.Station.VIEWING_PLATFORM,
      TrainSet.Station.WATER_BRIDGE,
      TrainSet.Station.GAIN_MEAT,
      TrainSet.Station.TOWER_FIZZY,
      TrainSet.Station.CANDY_FACTORY,
      TrainSet.Station.TRACKSIDE_DINER,
    ]);
  }

  cliExecute(`mcd 11`);

  cliExecute(`fold wad of used tape`);
  equip($slot`hat`, $item`wad of used tape`);
  cliExecute(`parka kachungasaur`);
  equip($slot`shirt`, $item`Jurassic Parka`);
  equip($slot`weapon`, $item`June cleaver`);
  cliExecute(`umbrella dr`);
  equip($slot`off-hand`, $item`unbreakable umbrella`);
  cliExecute(`backupcamera init`);
  equip($slot`acc1`, $item`backup camera`);
  equip($slot`acc2`, $item`your cowboy boots`);
  equip($slot`acc3`, $item`combat lover's locket`);

  /*
  if (visitUrl(`place.php?whichplace=chateau`).includes(`Rest in Bed (free)`)) {
    if (getProperty(`timesRested`) === `0`) {
      visitUrl(`place.php?whichplace=chateau&action=chateau_restlabelfree`);
    }
  }
  */

  skeletons();
}

/*
map the monsters
purchase 1 yellow rocket
skeleton store => novelty tropical skeleton (yellow rocket)
use mayday
numberology 69 for +3 adv
::here, instant does 2 more skeleton store. perhaps, train prep? we will be unlocking guild instead
TEST: coil wire (60)
*/

export function skeletons(): void {
  setProperty(`_mustardServiceStage`, `Skeletons to Coil Wire`);
  print(`Beginning Stage 2: Skeletons to Coil Wire`, `blue`);

  if (getProperty(`_mustardServiceDiner`) === `false`) {
    adv1($location`Sloppy Seconds Diner`, -1, `abort;`);
    adv1($location`Uncle Gator's Country Fun-Time Liquid Waste Sluice`, -1, `abort;`);
    adv1($location`Barf Mountain`, -1, `abort;`);
    setProperty(`_mustardServiceDiner`, `true`);
  }

  visitUrl(`guild.php?guild=f`);
  visitUrl(`guild.php?place=challenge`);

  if (getKramcoWandererChance() === 1) {
    kramMode(); // should guarantee a sosig
  }

  if (have($effect`Beaten Up`) && !have($item`magical sausage casing`)) {
    abort(`Died during first sosig?`);
  }

  if (!have($item`red rocket`) && !have($effect`Everything Looks Red`)) {
    retrieveItem(1, $item`red rocket`);
  }

  if (!have($effect`Everything Looks Yellow`)) {
    writeCcs(`[default]\nskill feel hatred\nabort`, `mustardservice`);
    setCcs(`mustardservice`);
    CombatLoversLocket.reminisce($monster`red skeleton`);
    setCcs(`default`);

    cliExecute(`umbrella ml`);
    cliExecute(`backupcamera ml`);
    cliExecute(`parka dilophosaur`);

    writeCcs(
      `[default]\nskill feel nostalgic\nitem red rocket\nskill spit jurassic acid\nabort`,
      `mustardservice`
    );
    setCcs(`mustardservice`);
    Cartography.mapMonster($location`The Skeleton Store`, $monster`novelty tropical skeleton`);
    setCcs(`default`);
  }

  if (!have($effect`Everything Looks Yellow`) && have($effect`Beaten Up`)) {
    abort(`Failed to YR skeletong`);
  }

  if (have($item`red box`)) {
    use(1, $item`red box`);
  }

  cliExecute(`parka spikolodon`);

  if (have($item`MayDay™ supply package`)) {
    use(1, $item`MayDay™ supply package`);
    autosell(1, $item`space blanket`);
  }

  if (!have($item`Catherine Wheel`)) {
    retrieveItem(1, $item`Catherine Wheel`);
    equip($item`Catherine Wheel`);
  }

  if (have($item`magical sausage casing`)) {
    retrieveItem(1, $item`magical sausage`);
    eat(1, $item`magical sausage`);
  }

  if (get(`questG09Muscle`) !== `finished`) {
    const effs = [
      $effect`Ur-Kel's Aria of Annoyance`,
      $effect`Musk of the Moose`,
      $effect`Carlweather's Cantata of Confrontation`,
      $effect`Pride of the Puffin`,
      $effect`Carol of the Thrills`,
      $effect`Empathy`,
      $effect`Leash of Linguini`,
      $effect`Drescher's Annoying Noise`,
    ];

    for (const effect of effs) {
      if (!have(effect)) {
        useSkill(1, toSkill(effect));
      }
    }

    useFamiliar($familiar`Pair of Stomping Boots`);
    equip($slot`familiar`, $item`tiny stillsuit`);
    while (
      getProperty(`questG09Muscle`) !== `step1` &&
      getProperty(`questG09Muscle`) !== `finished`
    ) {
      adv1($location`The Outskirts of Cobb's Knob`, -1, `runaway; abort;`);
    }
    if (have($effect`Carlweather's Cantata of Confrontation`)) {
      uneffect($effect`Carlweather's Cantata of Confrontation`);
    }

    visitUrl(`guild.php?guild=f`);
    visitUrl(`guild.php?place=challenge`);
    visitUrl(`guild.php?place=scg`);
    visitUrl(`guild.php?place=scg`);

    useFamiliar(famRoute);
    equip($slot`familiar`, $item`tiny stillsuit`);
  }

  if (get(`_universeCalculated`) === 0) {
    cliExecute(`numberology 69`);
  }

  if (myAdventures() < 61 && !have($item`distilled fortified wine`)) {
    retrieveItem(1, $item`11-leaf clover`);
    use(1, $item`11-leaf clover`);
    adv1($location`The Sleazy Back Alley`);
    useSkill(1, $skill`The Ode to Booze`);
    drink(1, $item`distilled fortified wine`);
    uneffect($effect`Ode to Booze`);
  }

  if (!get(`csServicesPerformed`).includes(`Coil Wire`)) {
    visitUrl(`council.php`);
    visitUrl(`choice.php?whichchoice=1089&option=11&pwd=${myHash()}`);
    print(`WIRE? COILED.`, `blue`);
    setProperty(`_mustardServiceTests`, `60`);
  }

  nextLevelling();
}

/*
clan shower warm
facial exp mus%
pull: deep dish of legend, calzone of legend, pizza of legend, abstraction:purpose
monkey wish: HGH-charged
chew abstratcion:purpose
use ten-percent bonus
maximize for mp, restore mp
eat calzone, deep dish
cast scurvy and sobriety
consult Gunther, Lord of Smackdown
buy and use 5 bengal balm
maximize for levling
buff way up for leveling

buy a blue and red rocket
scaler zone: gnats; red rocket; blue rocket; weaksauce; stuffed mortar shell; saucegeyser (fallbot returns)
eat 1 pizza of legend
change boombox to meat??
*/

export function levellingPrep(): void {
  setProperty(`_mustardServiceStage`, `Levelling Preparation`);
  if (!have($effect`HGH-charged`)) {
    //cliExecute(`genie effect HGH-charged`);
    //CursedMonkeyPaw.wishFor($effect`HGH-charged`);
  }
  if (mySpleenUse() === 0 && have($item`abstraction: purpose`)) {
    chew(1, $item`abstraction: purpose`);
  }

  if (get(`_aprilShower`) === false) {
    if (Clan.get().name !== `Bonus Adventures from Hell`) {
      Clan.join(`Bonus Adventures from Hell`);
    }
    cliExecute(`shower warm`);
  }

  if (have($item`a ten-percent bonus`)) {
    use(1, $item`a ten-percent bonus`);
  }

  if (get(`_clanFortuneBuffUsed`) === false) {
    if (Clan.get().name !== `Bonus Adventures from Hell`) {
      Clan.join(`Bonus Adventures from Hell`);
    }
    //cliExecute(`fortune mus`);  //seems to not be necessary at this point
  }

  if (get(`calzoneOfLegendEaten`) === false) {
    eat(1, $item`Calzone of Legend`);
  }
  if (get(`deepDishOfLegendEaten`) === false && have($item`Deep Dish of Legend`)) {
    eat(1, $item`Deep Dish of Legend`);
  }

  if (get(`_lyleFavored`) === false) {
    cliExecute(`monorail`);
  }

  if (get(`telescopeLookedHigh`) === false) {
    cliExecute(`telescope look high`);
  }

  if (!have($effect`New and Improved`)) {
    //CursedMonkeyPaw.wishFor($effect`New and Improved`);
    cliExecute(`genie effect New and Improved`);
  }

  if (have($item`wasabi marble soda`)) {
    use(1, $item`wasabi marble soda`);
  }

  if (!have($effect`A Contender`) && famRoute === $familiar`Melodramedary`) {
    //CursedMonkeyPaw.wishFor($effect`A Contender`);
    cliExecute(`genie effect A Contender`);
  }

  for (const item of $items`Ben-Gal™ Balm, hair spray, glittery mascara`) {
    if (!have(item)) {
      retrieveItem(3, item);
      use(2, item);
    }
  }

  if (get(`reagentSummons`) === 0) {
    useSkill(1, $skill`Advanced Saucecrafting`);
  }

  if (get(`_preventScurvy`) === false) {
    useSkill(1, $skill`Prevent Scurvy and Sobriety`);
  }

  if (!have($effect`Phorcefullness`)) {
    retrieveItem(1, $item`philter of phorce`);
    use(1, $item`philter of phorce`);
  }

  if (!have($effect`Stabilizing Oiliness`)) {
    retrieveItem(1, $item`oil of stability`);
    use(1, $item`oil of stability`);
  }

  if (!have($effect`Mystically Oiled`)) {
    retrieveItem(1, $item`ointment of the occult`);
    use(1, $item`ointment of the occult`);
  }

  useSkill(1, $skill`Blood Sugar Sauce Magic`);

  if (have($effect`Everything Looks Red`)) {
    eat(1, $item`Pizza of Legend`);
  }

  equip($slot`off-hand`, $item`latte lovers member's mug`);

  if (get(`_latteDrinkUsed`) === false && get(`_latteRefillsUsed`) === 0) {
    const rocketFight = `[default]\nskill gulp latte\nskill throw latte on opponent\nabort`;
    writeCcs(rocketFight, `mustardservice`);
    setCcs(`mustardservice`);
    adv1($location`Uncle Gator's Country Fun-Time Liquid Waste Sluice`, -1); //gulp, rockets, run
    setCcs(`default`);
    Latte.fill(`pumpkin`, `cinnamon`, `vanilla`);
  }

  if (get(`_latteDrinkUsed`) === false && get(`_latteRefillsUsed`) === 1) {
    const rocketFight = `[default]\nskill gulp latte\nskill throw latte on opponent\nabort`;
    writeCcs(rocketFight, `mustardservice`);
    setCcs(`mustardservice`);
    adv1($location`Uncle Gator's Country Fun-Time Liquid Waste Sluice`, -1); //gulp, rockets, run
    setCcs(`default`);
    Latte.fill(`pumpkin`, `cinnamon`, `vanilla`);
  }

  if (have($effect`Everything Looks Red`)) {
    eat(1, $item`Pizza of Legend`);
  } else {
    abort(`rocket fight: wrongy`);
  }

  if (!have($effect`In a Lather`) && drinkSockdollager) {
    if (Clan.get().name !== `Bonus Adventures from Hell`) {
      Clan.join(`Bonus Adventures from Hell`);
    }
    useSkill(1, $skill`The Ode to Booze`);
    visitUrl(`clan_viplounge.php?preaction=speakeasydrink&drink=6&pwd=${+myHash()}`); //sockdollager
  }

  const effects = [
    $effect`Bendin' Hell`,
    $effect`Song of the North`,
    $effect`Disco Fever`,
    $effect`Mariachi Mood`,
    $effect`Patience of the Tortoise`,
    $effect`Rage of the Reindeer`,
    $effect`Seal Clubbing Frenzy`,
    $effect`Saucemastery`,
    $effect`Stevedave's Shanty of Superiority`,
    $effect`Song of Bravado`,
    $effect`Carol of the Bulls`,
    $effect`Carol of the Hells`,
    $effect`Carol of the Thrills`,
    $effect`Pride of the Puffin`,
    $effect`Ur-Kel's Aria of Annoyance`,
    $effect`Drescher's Annoying Noise`,
    $effect`The Magical Mojomuscular Melody`,
    $effect`Quiet Determination`,
    $effect`Big`,
    $effect`Empathy`,
    $effect`Leash of Linguini`,
    $effect`Blood Bond`,
    $effect`Feeling Excited`,
    $effect`Ghostly Shell`,
    $effect`Astral Shell`,
    $effect`Jalapeño Saucesphere`,
    $effect`Elemental Saucesphere`,
    $effect`Scarysauce`,
    $effect`Feeling Peaceful`,
    $effect`Your Fifteen Minutes`,
    $effect`Frostbeard`,
    $effect`Takin' It Greasy`,
    $effect`Rotten Memories`,
    $effect`Pyromania`,
    $effect`Intimidating Mien`,
    $effect`Fat Leon's Phat Loot Lyric`,
    $effect`Singer's Faithful Ocelot`,
  ];
  for (const effect of effects) {
    ensureEffect(effect);
    /*
    if (!have(effect)) {
      useSkill(1, toSkill(effect));
    }
    */
  }
  if (!have($effect`Frostbeard`)) {
    abort(`Failed to obtain effects?`);
  }

  if (!get(`_latteDrinkUsed`) && get(`_latteRefillsUsed`) === 2) {
    adv1(
      $location`Uncle Gator's Country Fun-Time Liquid Waste Sluice`,
      -1,
      `skill 7303; skill 7301; abort;`
    ); //gulp, run
    Latte.fill(`pumpkin`, `cinnamon`, `vanilla`);
  }

  equip($slot`off-hand`, $item`unbreakable umbrella`);
  useSkill(1, $skill`Blood Sugar Sauce Magic`);

  nextLevelling();
}

export function riftConsult(): string {
  const bossStrategies: Record<string, string> = {
    [`shadow cauldron`]: `skill northern explosion; repeat;`,
    [`shadow matrix`]: `skill stuffed mortar shell; skill saucegeyser; repeat;`,
    [`shadow orrery`]: `skill northern explosion; repeat;`,
    [`shadow scythe`]: `skill northern explosion; repeat;`,
    [`shadow spire`]: `skill northern explosion; repeat;`,
    [`shadow tongue`]: `skill northern explosion; repeat;`,
  };

  if (get(`_fireExtinguisherCharge`) > 10) {
    if (equippedItem($slot`weapon`) !== $item`industrial fire extinguisher`) {
      equip($slot`weapon`, $item`industrial fire extinguisher`);
    }
    const riftStyle = `skill summon love stinkbug; if monsterid 2278; skill Fire Extinguisher: Polar Vortex; skill Fire Extinguisher: Polar Vortex; skill Fire Extinguisher: Polar Vortex; skill Fire Extinguisher: Polar Vortex; skill Fire Extinguisher: Polar Vortex; skill Fire Extinguisher: Polar Vortex; skill Fire Extinguisher: Polar Vortex; skill Fire Extinguisher: Polar Vortex; skill Fire Extinguisher: Polar Vortex; endif; attack; repeat;`;
    return riftStyle;
  } else if (get(`rufusQuestType`) === `entity` && get(`encountersUntilSRChoice`) === 0) {
    restoreHp(myMaxhp());
    equip($item`Jurassic Parka`);

    const boss = get(`rufusQuestTarget`);
    if (boss in bossStrategies) {
      const riftStyle = bossStrategies[boss];
      return riftStyle;
    } else {
      return `abort;`;
    }
  } else {
    if (equippedItem($slot`weapon`) !== $item`June cleaver`) {
      equip($slot`weapon`, $item`June cleaver`);
    }
    const riftStyle = `skill summon love stinkbug; attack; repeat;`;
    return riftStyle;
  }
}

export function payphoneFights(): void {
  setProperty(`_mustardServiceStage`, `Levelling: Payphone`);

  if (have($item`porkpie-mounted popper`)) {
    equip($item`porkpie-mounted popper`);
  }

  if (get(`_shadowAffinityToday`) === false) {
    setProperty(`choiceAdventure1497`, `1`);
    use(1, $item`closed-circuit pay phone`);
    /*
    const shadowBoss = get(`rufusDesiredEntity`);
    if (shadowBoss) {
      runChoice(1);
    } else {
      runChoice(2);
    }
    */
  }

  while (have($effect`Shadow Affinity`) && get(`encountersUntilSRChoice`) > 0) {
    preVenture();
    const riftStyle = riftConsult();
    adv1($location`Shadow Rift (The Misspelled Cemetary)`, -1, riftStyle);
  }

  if (get(`questRufus`) === `started` && get(`encountersUntilSRChoice`) === 0) {
    if (equippedItem($slot`weapon`) !== $item`June cleaver`) {
      equip($slot`weapon`, $item`June cleaver`);
    }
    preVenture();
    useFamiliar($familiar`Machine Elf`);
    const riftStyle = riftConsult();
    adv1($location`Shadow Rift`, -1, riftStyle);
    useFamiliar(famRoute);
  }
  if (get(`questRufus`) === `step1`) {
    use(1, $item`closed-circuit pay phone`);
  }

  fallGuy();

  if (have($effect`Beaten Up`)) {
    abort(`Died? Shadow Boss?`);
  }

  nextLevelling();
}

export function snojoFights(): void {
  setProperty(`_mustardServiceStage`, `Levelling: Snojo`);
  visitUrl(`place.php?whichplace=snojo&action=snojo_controller`);
  visitUrl(`choice.php?pwd=${myHash()}&whichchoice=1118&option=3`);

  equip($slot`hat`, $item`porkpie-mounted popper`);
  cliExecute(`fold garbage shirt`);
  equip($item`makeshift garbage shirt`);
  const snojoMode = `attack; repeat;`;

  while (get(`_snojoFreeFights`) < 10) {
    preVenture();
    adv1($location`The X-32-F Combat Training Snowman`, -1, snojoMode);
  }

  if (Clan.get().name !== `Bonus Adventures from Hell`) {
    Clan.join(`Bonus Adventures from Hell`);
  }
  visitUrl(`clan_viplounge.php?action=hottub`);

  nextLevelling();
}

export function oliverFights(): void {
  setProperty(`_mustardServiceStage`, `Levelling: Oliver's`);

  if (get(`_monstersMapped`) === 1) {
    preVenture();

    useFamiliar($familiar`Nanorhino`);

    writeCcs(
      `[default]\nskill feel nostalgic\nskill feel envy\nskill lunging thrust-smack\nattack`,
      `mustardservice`
    );
    setCcs(`mustardservice`);
    Cartography.mapMonster($location`An Unusually Quiet Barroom Brawl`, $monster`goblin flapper`);
    setCcs(`default`);

    useFamiliar(famRoute);
  }

  const barMode = `attack; repeat;`;
  while (get(`_speakeasyFreeFights`) < 3) {
    preVenture();
    adv1($location`An Unusually Quiet Barroom Brawl`, -1, barMode);
  }

  nextLevelling();
}

export function sealFights(): void {
  for (const item of $items`porkpie-mounted popper, seal-clubbing club`) {
    if (!have(item)) {
      retrieveItem(1, item);
    }
  }

  setProperty(`_mustardServiceStage`, `Levelling: Seals`);
  const clubMode = `[default]\nattack`;
  writeCcs(clubMode, `mustardservice`);
  setCcs(`mustardservice`);
  while (get(`_sealsSummoned`) < 5) {
    retrieveItem(1, $item`figurine of an ancient seal`);
    retrieveItem(3, $item`seal-blubber candle`);
    preVenture();
    equip($slot`weapon`, $item`seal-clubbing club`);
    use(1, $item`figurine of an ancient seal`);
  }
  setCcs(`default`);
  equip($slot`weapon`, $item`June cleaver`);

  nextLevelling();
}

export function witchessFights(): void {
  setProperty(`_mustardServiceStage`, `Levelling: Witchess`);
  equip($slot`shirt`, $item`makeshift garbage shirt`);

  const bishieMode = `[default]\n"if hasskill 7340; skill 7340; endif;"\nattack`;
  writeCcs(bishieMode, `mustardservice`);
  setCcs(`mustardservice`);
  while (get(`_witchessFights`) < 4) {
    preVenture();
    Witchess.fightPiece($monster`Witchess Bishop`);
  }
  setCcs(`default`);

  nextLevelling(); //currently, skipping backups entirely
}

//backups
export function backupFights(): void {
  setProperty(`_mustardServiceStage`, `Levelling: Backups`);
  equip($slot`off-hand`, $item`Kramco Sausage-o-Matic™`);
  if (get(`_sausageFights`) === 0) {
    preVenture();
    const sausageFights = `attack; repeat;`;
    adv1($location`Barf Mountain`, -1, sausageFights);
  }

  if (get(`_sausageFights`) > 0) {
    const backupFights = `if hasskill 7381; skill 7381; endif; if hasskill 7340; skill 7340; endif; attack; repeat;`;
    while (get(`_backUpUses`) < 11) {
      preVenture();
      adv1($location`The Dire Warren`, -1, backupFights);
    }
  }
  nextLevelling();
}

export function deepMachineFights(): void {
  setProperty(`_mustardServiceStage`, `Levelling: DMT`);
  const deepFight = `if hasskill 7340; skill 7340; endif; skill lunging thrust-smack; repeat;`;

  useFamiliar($familiar`Machine Elf`);
  equip($slot`familiar`, $item`tiny stillsuit`);
  while (get(`_machineTunnelsAdv`) < 5) {
    preVenture();
    adv1($location`The Deep Machine Tunnels`, -1, deepFight);
  }

  useFamiliar(famRoute);
  equip($slot`familiar`, $item`tiny stillsuit`);

  nextLevelling();
}

export function neverendingFreefights(): void {
  setProperty(`_mustardServiceStage`, `Levelling: NEP`);
  const NEPFight = `if hasskill 7406; skill 7406; endif; if hasskill 7340; skill 7340; endif; skill lunging thrust-smack; repeat;`;

  if (get(`_questPartyFair`) === `unstarted`) {
    set(`choiceAdventure1322`, 2);

    set(`choiceAdventure1324`, 5);
    set(`choiceAdventure1326`, 2);

    adv1(scalerZone, -1, `abort`);
  }

  writeCcs(NEPFight, `mustardservice`);
  setCcs(`mustardservice`);

  while (get(`_neverendingPartyFreeTurns`) < 10) {
    preVenture();
    adv1(scalerZone, -1, NEPFight);
  }

  setCcs(`default`);

  nextLevelling();
}

/*
scaler zone powerlevling: idk when this can end. depends on cookbat? depends on level? looks like instant stops after 2 combats with cbb drops
cook and eat: whatever you can? rich ricotta, plain calzone, vegetable of jarlsberg?, ricotta casserole (6 jarls, 6 whey, 3 yeast)
visit lyle
look high telescope
kill witch now if attempting, otherwise kill another bishop
feel pride and free kills in scaler zone
the fights continue but are not free: they stop with 3 more veggie drops
buff up for stat tests
TEST: stat (1)
TEST: stat (1)
TEST: stat (1)
TEST: hp (1)
*/

export function freekillConsult(): string {
  let freeFights = `if hasskill 7406; skill 7406; endif; if hasskill 7340; skill 7340; endif;`;
  if (get(`_shatteringPunchUsed`) < 3) {
    equip($slot`acc3`, $item`Cincho de Mayo`);
    freeFights += `if hasskill 7357; skill 7357; endif; if hasskill 7444; skill 7444; endif; if hasskill Shattering Punch; skill Shattering Punch; endif; abort;`;
    return freeFights;
  } else if (get(`_chestXRayUsed`) < 3) {
    equip($slot`acc3`, $item`Lil' Doctor™ bag`);
    freeFights += ` if hasskill 7307; skill 7307; endif; abort;`;
    return freeFights;
  } else if (!get(`_gingerbreadMobHitUsed`)) {
    freeFights += ` if hasskill 163; skill 163; endif; abort;`;
    return freeFights;
  } else {
    return `abort;`;
  }
}

export function freekillBonanza(): void {
  setProperty(`_mustardServiceStage`, `Levelling: Freekills`);
  if (get(`_witchessFights`) === 4) {
    const finalWitchpiece = `[default]\nskill lunging thrust-smack`;
    writeCcs(finalWitchpiece, `mustardservice`);
    setCcs(`mustardservice`);
    preVenture();
    Witchess.fightPiece($monster`Witchess Witch`);
    setCcs(`default`);
  }

  let cookbatGoal =
    availableAmount($item`St. Sneaky Pete's Whey`) +
    availableAmount($item`Yeast of Boris`) +
    availableAmount($item`Vegetable of Jarlsberg`);

  let camelgoal = get(`_gingerbreadMobHitUsed`) && have($effect`Spit Upon`);

  while (cookbatGoal < 15 && !camelgoal) {
    const freeFights = freekillConsult();

    writeCcs(freeFights, `mustardservice`);
    setCcs(`mustardservice`);

    preVenture();
    adv1(scalerZone, -1, freeFights);

    setCcs(`default`);

    cookbatGoal =
      availableAmount($item`St. Sneaky Pete's Whey`) +
      availableAmount($item`Yeast of Boris`) +
      availableAmount($item`Vegetable of Jarlsberg`);

    camelgoal = get(`_gingerbreadMobHitUsed`) && have($effect`Spit Upon`);
  }

  if (famRoute === $familiar`Cookbookbat`) {
    /*
  if (haveEffect($effect`Rippin' Ricotta`) === 0) {
    retrieveItem(1, $item`Pete's rich ricotta`);
    eat(1, $item`Pete's rich ricotta`);
  }
  if (haveEffect($effect`Wizard Sight`) === 0) {
    retrieveItem(1, $item`roasted vegetable of Jarlsberg`);
    eat(1, $item`roasted vegetable of Jarlsberg`);
  }
  */
    if (!have($effect`Inspired Chef`)) {
      retrieveItem(1, $item`Boris's bread`);
      eat(1, $item`Boris's bread`);
    }
    if (!have($effect`Pretty Delicious`)) {
      retrieveItem(1, $item`baked veggie ricotta casserole`);
      eat(1, $item`baked veggie ricotta casserole`);
    }
  }

  cliExecute(`fold wad of used tape`);

  if (get(`lastTrainsetConfiguration`) === 0) {
    TrainSet.setConfiguration([
      TrainSet.Station.COAL_HOPPER,
      TrainSet.Station.GAIN_MEAT,
      TrainSet.Station.TOWER_FIZZY,
      TrainSet.Station.CANDY_FACTORY,
      TrainSet.Station.ORE_HOPPER,
      TrainSet.Station.GRAIN_SILO,
      TrainSet.Station.VIEWING_PLATFORM,
      TrainSet.Station.TRACKSIDE_DINER,
    ]);
  }

  if (Clan.get().name !== `Bonus Adventures from Hell`) {
    Clan.join(`Bonus Adventures from Hell`);
  }
  visitUrl(`clan_viplounge.php?action=hottub`);

  nextTest();
}

export function musTest(): void {
  setProperty(`_mustardServiceStage`, `TEST: Muscle`);
  if (!getProperty(`csServicesPerformed`).includes(`Feed The Children`)) {
    maximize(`mus`, false);
    if (!have($effect`Quiet Determination`)) {
      useSkill(1, $skill`Quiet Determination`);
    }
    printModtrace(`muscle`);
    printModtrace(`muscle percent`);
    const musTurnsave = CommunityService.Muscle.prediction;
    print(`MUS TEST: Expecting: ${musTurnsave} `, `blue`);
    const testTurns = myAdventures();
    visitUrl(`council.php`);
    visitUrl(`choice.php?whichchoice=1089&option=2&pwd=${myHash()}`);
    setProperty(
      `_mustardServiceTests`,
      `${getProperty(`_mustardServiceTests`)},${
        testTurns - myAdventures()
      } [Expected: ${musTurnsave}]`
    );
    print(`MUS TEST: Took ${testTurns - myAdventures()}`, `blue`);
  }

  nextTest();
}

export function mysTest(): void {
  setProperty(`_mustardServiceStage`, `TEST: Mysticality`);
  if (!getProperty(`csServicesPerformed`).includes(`Build Playground Mazes`)) {
    useSkill(1, $skill`Quiet Judgement`);
    maximize(`mys`, false);
    printModtrace(`mysticality`);
    printModtrace(`mysticality percent`);
    const mysTurnsave = CommunityService.Mysticality.prediction;
    print(`MYS TEST: Expecting: ${mysTurnsave} `, `blue`);
    const testTurns = myAdventures();
    visitUrl(`council.php`);
    visitUrl(`choice.php?whichchoice=1089&option=3&pwd=${myHash()}`);
    setProperty(
      `_mustardServiceTests`,
      `${getProperty(`_mustardServiceTests`)},${
        testTurns - myAdventures()
      } [Expected: ${mysTurnsave}]`
    );
    print(`MYS TEST: Took ${testTurns - myAdventures()}`, `blue`);
  }

  nextTest();
}

export function moxTest(): void {
  setProperty(`_mustardServiceStage`, `TEST: Moxie`);
  if (!getProperty(`csServicesPerformed`).includes(`Feed Conspirators`)) {
    useSkill(1, $skill`Quiet Desperation`);
    maximize(`mox`, false);
    printModtrace(`moxie`);
    printModtrace(`moxie percent`);
    const moxTurnsave = CommunityService.Moxie.prediction;
    print(`MOX TEST: Expecting: ${moxTurnsave} `, `blue`);
    const testTurns = myAdventures();
    visitUrl(`council.php`);
    visitUrl(`choice.php?whichchoice=1089&option=4&pwd=${myHash()}`);
    setProperty(
      `_mustardServiceTests`,
      `${getProperty(`_mustardServiceTests`)},${
        testTurns - myAdventures()
      } [Expected: ${moxTurnsave}]`
    );
    print(`MOX TEST: Took ${testTurns - myAdventures()}`, `blue`);
  }

  nextTest();
}

export function hpTest(): void {
  setProperty(`_mustardServiceStage`, `TEST: HP`);
  if (!getProperty(`csServicesPerformed`).includes(`Donate Blood`)) {
    maximize(`hp`, false);
    printModtrace(`Maximum HP`);
    printModtrace(`Maximum HP percent`);
    const hpTurnsave = CommunityService.HP.prediction;
    print(`HP TEST: Expecting: ${hpTurnsave} `, `blue`);
    const testTurns = myAdventures();
    visitUrl(`council.php`);
    visitUrl(`choice.php?whichchoice=1089&option=1&pwd=${myHash()}`);
    setProperty(
      `_mustardServiceTests`,
      `${getProperty(`_mustardServiceTests`)},${
        testTurns - myAdventures()
      } [Expected: ${hpTurnsave}]`
    );
    print(`HP TEST: Took ${testTurns - myAdventures()}`, `blue`);
  }

  nextTest();
}

export function famwtTest(): void {
  setProperty(`_mustardServiceStage`, `TEST: famwt`);

  useFamiliar($familiar`Mini-Trainbot`);
  if (availableAmount($item`box of Familiar Jacks`) === 1) {
    use(1, $item`box of Familiar Jacks`);
    equip($slot`familiar`, $item`overloaded Yule battery`);
  }

  for (const eff of [`Empathy`, `Leash of Linguini`, `Blood Bond`]) {
    if (haveEffect(Effect.get(eff)) === 0) {
      useSkill(1, toSkill(Effect.get(eff)));
    }
  }

  if (getProperty(`_witchessBuff`) === `false`) {
    cliExecute(`witchess`);
  }

  if (haveEffect($effect`Billiards Belligerence`) === 0) {
    cliExecute(`pool 1`);
  }

  maximize(`familiar weight`, false);

  if (!getProperty(`csServicesPerformed`).includes(`Breed More Collies`)) {
    const testTurns = myAdventures();
    const famwtTurnsave = CommunityService.FamiliarWeight.prediction;
    printModtrace(`familiar weight`);
    print(`FAMWT TEST: Expecting: ${famwtTurnsave}`, `blue`);
    visitUrl(`council.php`);
    visitUrl(`choice.php?whichchoice=1089&option=5&pwd=${myHash()}`);
    setProperty(
      `_mustardServiceTests`,
      `${getProperty(`_mustardServiceTests`)},${
        testTurns - myAdventures()
      } [Expected: ${famwtTurnsave}]`
    );
    print(`FAMWT TEST: Took ${testTurns - myAdventures()}`, `blue`);
  }

  nextTest();
}

/*
get shadow waters
swap fam disgeist
maximize nc (squeaky toy rose, shady shades)
TEST: noncom
*/

export function noncomTest(): void {
  setProperty(`_mustardServiceStage`, `TEST: noncom`);

  if (!have($effect`Shadow Waters`)) {
    setProperty(`choiceAdventure1500`, `2`); //shadow waters
    adv1($location`Shadow Rift`, -1, `abort;`);
  }
  useFamiliar($familiar`Disgeist`);

  cliExecute(`umbrella nc`);
  cliExecute(`parka pterodactyl`);

  for (const item of [`squeaky rose`, `shady shades`]) {
    if (availableAmount(Item.get(item)) > 0) {
      use(1, Item.get(item));
    }
  }

  if (!have($effect`Silent Running`)) {
    cliExecute(`swim noncombat`);
  }

  for (const skill of [`The Sonata of Sneakiness`, `Smooth Movement`, `Feel Lonely`]) {
    useSkill(1, Skill.get(skill));
  }

  maximize(`-60 combat rate 13 familiar weight -tie`, false);
  equip($slot`familiar`, $item`tiny stillsuit`);
  equip($slot`off-hand`, $item`unbreakable umbrella`);

  if (!getProperty(`csServicesPerformed`).includes(`Be a Living Statue`)) {
    const testTurns = myAdventures();
    const ncTurnsave = CommunityService.Noncombat.prediction;
    print(`Recorded Combat Rate at ${numericModifier(`Combat Rate`)}`);
    printModtrace(`Combat Rate`);
    print(`NC TEST: Expecting ${ncTurnsave}`, `blue`);
    visitUrl(`council.php`);
    visitUrl(`choice.php?whichchoice=1089&option=8&pwd=${myHash()}`);
    setProperty(
      `_mustardServiceTests`,
      `${getProperty(`_mustardServiceTests`)},${
        testTurns - myAdventures()
      } [Expected: ${ncTurnsave}]`
    );
    print(`NC TEST: Took ${testTurns - myAdventures()}`, `blue`);
  }

  nextTest();
}

export function itemTest(): void {
  setProperty(`_mustardServiceStage`, `TEST: Item`);

  if (
    availableAmount($item`cyclops eyedrops`) < 1 &&
    haveEffect($effect`One Very Clear Eye`) === 0
  ) {
    retrieveItem(1, $item`11-leaf clover`);
    use(1, $item`11-leaf clover`);
    adv1($location`The Limerick Dungeon`, -1, `abort;`);
    use(1, $item`cyclops eyedrops`);
  }

  /*
  if (haveEffect($effect`Sacré Mental`) === 0) {
    useSkill(1, $skill`The Ode to Booze`);
    drink(1, $item`Sacramento Wine`);
  }
  */
  /*
  if (haveEffect($effect`Wizard Sight`) === 0) {
    retrieveItem(1, $item`roasted vegetable of Jarlsberg`);
    eat(1, $item`roasted vegetable of Jarlsberg`);
  }
  */

  if (!have($effect`Feeling Lost`)) {
    useSkill(1, $skill`Feel Lost`);
  }

  if (getProperty(`_deckCardsDrawn`) === `0`) {
    DeckOfEveryCard.cheatCard(`X - The Wheel of Fortune`);
  }

  if (haveEffect($effect`Infernal Thirst`) === 0) {
    CursedMonkeyPaw.wishFor($effect`Infernal Thirst`);
  }

  cliExecute(`umbrella item`);
  cliExecute(`fold wad of used tape`);
  maximize(`Item Drop, -equip broken champagne bottle`, false);
  use(1, $item`autumn leaf`);
  use(1, $item`bag of grain`);
  for (const eff of [
    $effect`Fat Leon's Phat Loot Lyric`,
    $effect`Singer's Faithful Ocelot`,
    $effect`Steely-Eyed Squint`,
    $effect`Spice Haze`,
  ]) {
    ensureEffect(eff);
  }

  if (!getProperty(`csServicesPerformed`).includes(`Make Margaritas`)) {
    const testTurns = myAdventures();
    const itemTurnsave = CommunityService.BoozeDrop.prediction;
    printModtrace(`item drop`);
    printModtrace(`booze drop`);
    print(`ITEM TEST: Expecting ${itemTurnsave}`, `blue`);
    visitUrl(`council.php`);
    visitUrl(`choice.php?whichchoice=1089&option=9&pwd=${myHash()}`);
    setProperty(
      `_mustardServiceTests`,
      `${getProperty(`_mustardServiceTests`)},${
        testTurns - myAdventures()
      } [Expected: ${itemTurnsave}]`
    );
    print(`ITEM TEST: Took ${testTurns - myAdventures()}`, `blue`);
  }

  nextTest();
}

export function hotresTest(): void {
  setProperty(`_mustardServiceStage`, `TEST: hotres`);
  useFamiliar($familiar`Exotic Parrot`);

  if (!have($effect`Fireproof Foam Suit`) && get(`_fireExtinguisherCharge`) > 0) {
    equip($slot`weapon`, $item`Fourth of May Cosplay Saber`);
    equip($slot`off-hand`, $item`industrial fire extinguisher`);

    const fireProof = `if hasskill 7388; skill 7388; endif; if hasskill 7311; skill 7311; endif; abort;`;
    setProperty(`choiceAdventure1387`, `3`);
    writeCcs(fireProof, `mustardservice`);
    setCcs(`mustardservice`);
    setProperty(`choiceAdventure1387`, `3`);
    CombatLoversLocket.reminisce($monster`ungulith`);
    setCcs(`default`);

    if (!have($effect`Fireproof Foam Suit`)) {
      abort(`Failed to gain foam suit :(`);
    }
  }

  maximize(`hot res`, false);
  for (const skill of [
    `Elemental Saucesphere`,
    `Feel Peaceful`,
    `Astral Shell`,
    `Blood Bond`,
    `Empathy of the Newt`,
    `Leash of Linguini`,
  ]) {
    if (haveEffect(toEffect(Skill.get(skill))) === 0) {
      useSkill(1, Skill.get(skill));
    }
  }
  equip($slot`familiar`, $item`tiny stillsuit`);
  if (numericModifier(`hot resistance`) < 59) {
    use(1, $item`pocket maze`);
  }

  if (!getProperty(`csServicesPerformed`).includes(`Clean Steam Tunnels`)) {
    const testTurns = myAdventures();
    const hotresTurnsave = CommunityService.HotRes.prediction;
    printModtrace(`hot resistance`);
    print(`HOTRES TEST: Expecting ${hotresTurnsave}`);
    visitUrl(`council.php`);
    visitUrl(`choice.php?whichchoice=1089&option=10&pwd=${myHash()}`);
    setProperty(
      `_mustardServiceTests`,
      `${getProperty(`_mustardServiceTests`)},${
        testTurns - myAdventures()
      } [Expected: ${hotresTurnsave}]`
    );
    print(`HOTRES TEST: Took ${testTurns - myAdventures()} [Expected: ${hotresTurnsave}]`);
  }

  nextTest();
}

export function wdmgTest(): void {
  setProperty(`_mustardServiceStage`, `TEST: wdmg`);
  preVenture();

  if (haveEffect($effect`Billiards Belligerence`) === 0) {
    if (Clan.get().name !== `Bonus Adventures from Hell`) {
      Clan.join(`Bonus Adventures from Hell`);
    }
    cliExecute(`pool 1`);
  }

  while (haveEffect($effect`Inner Elf`) === 0 && getProperty(`_snokebombUsed`) !== `3`) {
    preVenture();
    equip($slot`weapon`, Item.none);
    equip($slot`off-hand`, Item.none);
    motherSlime();
    equip($slot`weapon`, $item`ebony epee`);
    equip($slot`off-hand`, $item`Stick-Knife of Loathing`);
  }

  fallGuy();

  retrieveItem(1, $item`potion of potency`);

  //attempt deep dark visions of course :slightsmile: must be done before cowrruption, must last until spelltest
  deepDarkVisions();

  for (const item of $items`Punching Potion, potion of potency, corrupted marrow, imported taffy, red eye`) {
    if (have(item)) {
      use(1, item);
    }
  }

  if (haveEffect($effect`Weapon of Mass Destruction`) === 0) {
    retrieveItem(1, $item`goofily-plumed helmet`);
    cliExecute(`hatter goofily-plumed helmet`);
  }

  const effs = [
    $effect`Bow-Legged Swagger`,
    $effect`Scowl of the Auk`,
    $effect`Rage of the Reindeer`,
    $effect`Song of the North`,
    $effect`Carol of the Bulls`,
    $effect`Tenacity of the Snapper`,
    $effect`Jackasses' Symphony of Destruction`,
  ];
  for (const e of effs) {
    ensureEffect(e);
  }

  if (getProperty(`_barrelPrayer`) === `false`) {
    visitUrl(`da.php?barrelshrine=1`);
    visitUrl(`choice.php?whichchoice=1100&option=4`);
  }

  /*
  if (getProperty(`_monkeyPawWishesUsed`) === `2`) {
    cliExecute(`monkeypaw effect Spit Upon`);
    cliExecute(`monkeypaw effect Pyramid Power`);
  }
*/
  maximize(`weapon dmg`, false);
  if (!getProperty(`csServicesPerformed`).includes(`Reduce Gazelle Population`)) {
    const testTurns = myAdventures();
    const wdmgTurnsave = CommunityService.WeaponDamage.prediction;

    printModtrace(`weapon damage`);
    printModtrace(`weapon damage percent`);
    print(`WDMG TEST: Expecting ${wdmgTurnsave}`);
    visitUrl(`council.php`);
    visitUrl(`choice.php?whichchoice=1089&option=6&pwd=${myHash()}`);
    setProperty(
      `_mustardServiceTests`,
      `${getProperty(`_mustardServiceTests`)},${
        testTurns - myAdventures()
      } [Expected: ${wdmgTurnsave}]`
    );
    print(`WDMG TEST: Took ${testTurns - myAdventures()}`);
  }

  nextTest();
}

export function sdmgTest(): void {
  setProperty(`_mustardServiceStage`, `TEST: sdmg`);
  preVenture();

  const effs = [
    $effect`Simmering`,
    $effect`Song of Sauce`,
    $effect`Carol of the Hells`,
    $effect`Jackasses' Symphony of Destruction`,
  ];

  for (const e of effs) {
    ensureEffect(e);
  }

  if (!have($item`obsidian nutcracker`)) {
    retrieveItem(1, $item`obsidian nutcracker`);
  }

  if (have($item`tobiko marble soda`)) {
    use(1, $item`tobiko marble soda`);
  }

  while (!have($effect`Inner Elf`) && getProperty(`_snokebombUsed`) !== `3`) {
    preVenture();
    motherSlime();
  }

  if (!have($effect`Mental A-cue-ity`)) {
    if (Clan.get().name !== `Bonus Adventures from Hell`) {
      Clan.join(`Bonus Adventures from Hell`);
    }
    cliExecute(`pool 2`);
  }

  maximize(`spell damage`, false);

  if (!getProperty(`csServicesPerformed`).includes(`Make Sausage`)) {
    const testTurns = myAdventures();
    const sdmgTurnsave = CommunityService.SpellDamage.prediction;
    printModtrace(`spell damage`);
    printModtrace(`spell damage percent`);
    print(`SDMG TEST: Expected ${sdmgTurnsave}`);
    visitUrl(`council.php`);
    visitUrl(`choice.php?whichchoice=1089&option=7&pwd=${myHash()}`);
    setProperty(
      `_mustardServiceTests`,
      `${getProperty(`_mustardServiceTests`)},${
        testTurns - myAdventures()
      } [Expected: ${sdmgTurnsave}]`
    );
    print(`SDMG TEST: Took ${testTurns - myAdventures()}`);
  }

  nextTest();
}

export function finale(): void {
  setProperty(`_mustardServiceStage`, `Finale`);
  const currentTime = nowToInt();
  print(`${getProperty(`_mustardServiceTests`)}`);

  SongBoom.setSong(`Food Vibrations`);

  visitUrl(`council.php`);
  visitUrl(`choice.php?whichchoice=1089&option=30&pwd=${myHash()}`);

  const testString = getProperty(`csServicesPerformed`)
    .replace(`Feed The Children`, `Muscle: `)
    .replace(`Build Playground Mazes`, `Mysticality: `)
    .replace(`Feed Conspirators`, `Moxie: `)
    .replace(`Donate Blood`, `HP: `)
    .replace(`Reduce Gazelle Population`, `Weapon Damage: `)
    .replace(`Make Sausage`, `Spell Damage: `)
    .replace(`Breed More Collies`, `Familiar Weight: `)
    .replace(`Be a Living Statue`, `Noncombat: `)
    .replace(`Make Margaritas`, `Item and Booze Drop: `)
    .replace(`Clean Steam Tunnels`, `Hot Resistance: `);

  print(`(none): [${getProperty(`_mustardServiceTests`).split(`,`)[0]}]`, `blue`);
  for (let i = 1; i <= 10; i++) {
    const testName = testString.split(`,`)[i];
    const testDetails = getProperty(`_mustardServiceTests`).split(`,`)[i];
    print(`${testName}[${testDetails}]`);
  }
  print(
    `Took: ${Math.floor(
      (currentTime - Number(getProperty(`_mustardServiceTime`))) / 60000
    )} Minute(s), ${Math.floor(
      ((currentTime - Number(getProperty(`_mustardServiceTime`))) % 60000) / 1000
    )} Second(s)`,
    `green`
  );

  visitUrl(`inventory.php?action=pullall&pwd=${myHash()}`);
  if (have($effect`Feeling Lost`)) {
    uneffect($effect`Feeling Lost`);
  }

  if (yachtzeeChaining) {
    retrieveItem(1, $item`Deep Dish of Legend`);
    eat(1, $item`Deep Dish of Legend`);
    useSkill(1, $skill`The Ode to Booze`);
    drink(availableAmount($item`astral pilsner`), $item`astral pilsner`);
  }

  const mpSpendy = [
    $effect`Empathy`,
    $effect`Leash of Linguini`,
    $effect`Fat Leon's Phat Loot Lyric`,
    $effect`Singer's Faithful Ocelot`,
    $effect`Disco Leer`,
    $effect`Polka of Plenty`,
    $effect`Big`,
    $effect`Carol of the Bulls`,
    $effect`Carol of the Hells`,
    $effect`Carol of the Thrills`,
  ];

  for (const eff of mpSpendy) {
    while (haveEffect(eff) < 100) {
      ensureEffect(eff, 100);
    }
  }

  cliExecute(`gwa prismbreak`);
  cliExecute(`gwa breakfast`);
}

export function reEnter(stage: string): void {
  print(`Attempting Re-entry`);

  const stageMap: Record<string, () => void> = {
    [`Set-up and Preparation`]: () => setup(),
    [`Skeletons to Coil Wire`]: () => skeletons(),
    [`Levelling Preparation`]: () => levellingPrep(),
    [`Levelling: Payphone`]: () => payphoneFights(),
    [`Levelling: Snojo`]: () => snojoFights(),
    [`Levelling: Oliver's`]: () => oliverFights(),
    [`Levelling: Seals`]: () => sealFights(),
    [`Levelling: Witchess`]: () => witchessFights(),
    [`Levelling: Backups`]: () => backupFights(),
    [`Levelling: DMT`]: () => deepMachineFights(),
    [`Levelling: NEP`]: () => neverendingFreefights(),
    [`Levelling: Freekills`]: () => freekillBonanza(),
    [`TEST: famwt`]: () => famwtTest(),
    [`TEST: noncom`]: () => noncomTest(),
    [`TEST: Item`]: () => itemTest(),
    [`TEST: hotres`]: () => hotresTest(),
    [`TEST: wdmg`]: () => wdmgTest(),
    [`TEST: sdmg`]: () => sdmgTest(),
    [`TEST: HP`]: () => hpTest(),
    [`TEST: Muscle`]: () => musTest(),
    [`TEST: Mysticality`]: () => mysTest(),
    [`TEST: Moxie`]: () => moxTest(),
    [`Finale`]: () => finale(),
  };
  stageMap[stage]();
}

export function nextLevelling(): void {
  const levelOrder: Record<string, () => void> = {
    [`Set-up and Preparation`]: () => skeletons(),
    [`Skeletons to Coil Wire`]: () => levellingPrep(),
    [`Levelling Preparation`]: () => oliverFights(),
    [`Levelling: Payphone`]: () => snojoFights(),
    [`Levelling: Snojo`]: () => witchessFights(),
    [`Levelling: Oliver's`]: () => sealFights(),
    [`Levelling: Seals`]: () => payphoneFights(),
    [`Levelling: Witchess`]: () => deepMachineFights(),
    [`Levelling: Backups`]: () => backupFights(),
    [`Levelling: DMT`]: () => neverendingFreefights(),
    [`Levelling: NEP`]: () => freekillBonanza(),
  };

  const curStage = getProperty(`_mustardServiceStage`);
  levelOrder[curStage]();
}

export function nextTest(): void {
  const testNumber = getProperty(`csServicesPerformed`).split(`,`).length;
  const testOrder: Record<number, () => void> = {
    1: () => musTest(),
    2: () => mysTest(),
    3: () => moxTest(),
    4: () => hotresTest(),
    5: () => wdmgTest(),
    6: () => sdmgTest(),
    7: () => hpTest(),
    8: () => famwtTest(),
    9: () => noncomTest(),
    10: () => itemTest(),
    11: () => finale(),
  };

  testOrder[testNumber]();
}

export function main(): void {
  if (getProperty(`_mustardServiceStage`) === "") {
    print(`Fresh Run`);
    preRun();
  } else {
    reEnter(getProperty(`_mustardServiceStage`));
  }
}

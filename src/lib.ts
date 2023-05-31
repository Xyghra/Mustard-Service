import {
  abort,
  adv1,
  canAdventure,
  canEquip,
  cliExecute,
  equip,
  equippedItem,
  Familiar,
  getProperty,
  getWorkshed,
  haveEffect,
  haveEquipped,
  inebrietyLimit,
  Item,
  Location,
  mpCost,
  myAdventures,
  myFamiliar,
  myHash,
  myInebriety,
  myMaxhp,
  myMaxmp,
  myMp,
  print,
  restoreHp,
  restoreMp,
  runChoice,
  setProperty,
  Slot,
  toSkill,
  totalTurnsPlayed,
  turnsPerCast,
  use,
  useFamiliar,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $location,
  $skill,
  $slot,
  AutumnAton,
  CrimboShrub,
  get,
  getActiveEffects,
  getKramcoWandererChance,
  have,
  uneffect,
} from "libram";

const defaultTasks: (() => void)[] = [
  died,
  sweatSweat,
  juneCleaver,
  kramGo,
  sweatSweat,
  juneCleaver,
  ghostieMode,
  sweatSweat,
  juneCleaver,
  rayMode,
  fallGuy,
  stillSuit,
  coldConsult,
];

const freeOutfit = new Map<Slot, Item>([
  [$slot`hat`, $item`giant yellow hat`],
  [$slot`back`, $item`balsam barrel`],
  [$slot`shirt`, $item`Jurassic Parka`],
  [$slot`weapon`, $item`yule hatchet`],
  [$slot`off-hand`, $item`yule hatchet`],
  [$slot`pants`, $item`designer sweatpants`],
  [$slot`acc1`, $item`Mr. Cheeng's spectacles`],
  [$slot`acc2`, $item`lucky gold ring`],
  [$slot`acc3`, $item`teacher's pen`],
  [$slot`familiar`, $item`tiny stillsuit`],
]);

export function accessoryChecker(accs: Item[]): void {
  for (const acc of accs) {
    if (!haveEquipped(acc)) {
      for (const slot of [$slot`acc1`, $slot`acc2`, $slot`acc3`]) {
        if (!accs.includes(equippedItem(slot))) {
          equip(slot, acc);
          break;
        }
      }
    }
  }
}

export function equipOutfit(outfit: [Map<Slot, Item>, Familiar]): void {
  //Fam
  useFamiliar(outfit[1]);

  //Equips
  for (const key of outfit[0].keys()) {
    const item = outfit[0].get(key);
    const accs: Item[] = [];
    if (item) {
      if ([$slot`acc1`, $slot`acc2`, $slot`acc3`].includes(key)) {
        accs.push(item);
      } else {
        equip(key, item);
      }
      accessoryChecker(accs);
    }
  }
}

export function currentOutfit(): [Map<Slot, Item>, Familiar] {
  const curFit = new Map<Slot, Item>([
    [$slot`hat`, equippedItem($slot`hat`)],
    [$slot`back`, equippedItem($slot`back`)],
    [$slot`shirt`, equippedItem($slot`shirt`)],
    [$slot`weapon`, equippedItem($slot`weapon`)],
    [$slot`off-hand`, equippedItem($slot`off-hand`)],
    [$slot`pants`, equippedItem($slot`pants`)],
    [$slot`acc1`, equippedItem($slot`acc1`)],
    [$slot`acc2`, equippedItem($slot`acc2`)],
    [$slot`acc3`, equippedItem($slot`acc3`)],
    [$slot`familiar`, equippedItem($slot`familiar`)],
  ]);

  const curFam = myFamiliar();

  return [curFit, curFam];
}

export function died(): void {
  if (have($effect`Beaten Up`)) {
    abort(`:pensive: died??`);
  }
}

export function kramGo(): void {
  if (myInebriety() <= inebrietyLimit()) {
    if (getKramcoWandererChance() === 1) {
      print(`It's time to fight a goblin!`, `blue`);

      const outfit = currentOutfit();
      const fam = $familiar`Grey Goose`;

      equipOutfit([freeOutfit, fam]);
      equip($slot`off-hand`, $item`Kramco Sausage-o-Matic™`);

      const dropZone = dropZoner();
      const fightStyle = `if hasskill 7410; skill 7410; endif; attack; repeat;`;
      adv1(dropZone, -1, fightStyle);

      equipOutfit(outfit);
    }
  }
}

export function ghostieMode(): void {
  if (totalTurnsPlayed() - 50 > Number(getProperty(`gwa_ghostiecounter`))) {
    const curOut = currentOutfit();
    equipOutfit([freeOutfit, $familiar`Grey Goose`]);
    if (myInebriety() > inebrietyLimit()) {
      equip($item`Drunkula's wineglass`);
    } else {
      equip($slot`off-hand`, $item`Kramco Sausage-o-Matic™`);
    }

    use(1, $item`almost-dead walkie-talkie`);
    visitUrl(`questlog.php?which=7`);

    while (get(`ghostLocation`) !== null) {
      const target = get(`ghostLocation`);
      if (target) {
        restoreMp(30);
        setProperty(`gwa_ghostiecounter`, `${totalTurnsPlayed()}`);
        const sausageGhost = `if monstername sausage goblin; attack; repeat; endif; skill saucegeyser; repeat;`;
        adv1(target, -1, sausageGhost);
      } else {
        print(`uhh...`);
      }
    }
    equipOutfit(curOut);
  }
}

export function sweatSweat(): void {
  if (get(`sweat`) === 100) {
    if (get(`_sweatOutSomeBoozeUsed`) < 3 && myInebriety() > 0) {
      print(`Sweating out some Booze`, `blue`);
      useSkill(1, $skill`Sweat Out Some Booze`);
    } else {
      print(`Sweating out some Ade`, `blue`);
      useSkill(1, $skill`Make Sweat-Ade`);
    }
  }
}

export function juneCleaver(): void {
  if (
    get(`_juneCleaverFightsLeft`) === 0 &&
    (myInebriety() <= inebrietyLimit() || canEquip($item`Drunkula's wineglass`))
  ) {
    print(`It's Cleavin' time`, `blue`);
    const curOut = currentOutfit();
    if (equippedItem($slot`weapon`) !== $item`June cleaver`) {
      equip($slot`weapon`, $item`June cleaver`);
    }
    if (myInebriety() > inebrietyLimit()) {
      equip($item`Drunkula's wineglass`);
    }
    const dropZone = dropZoner();
    adv1(dropZone, -1, `abort;`);
    equipOutfit(curOut);
    if (have($effect`Beaten Up`)) {
      uneffect($effect`Beaten Up`);
    }
  }
}

export function dropZoner(): Location {
  let dropZone = $location`The Sleazy Back Alley`;
  if (canAdventure($location`Inside the Palindome`)) {
    if (haveEquipped($item`mafia thumb ring`)) {
      const curOut = currentOutfit();
      const accslots = [$slot`acc1`, $slot`acc2`, $slot`acc3`];
      for (const key of curOut[0].keys()) {
        if (accslots.includes(key) && curOut[0].get(key) === $item`mafia thumb ring`) {
          equip(key, $item`Talisman o' Namsilat`);
        }
      }
    }
    dropZone = $location`Inside the Palindome`;
  }
  return dropZone;
}

export function rayMode(): void {
  if (myInebriety() <= inebrietyLimit()) {
    if (!have($effect`Everything Looks Yellow`)) {
      const curOut = currentOutfit();
      const curParka = get(`parkaMode`);
      cliExecute(`parka acid`);
      if (!have($effect`Everything Looks Red`)) {
        useFamiliar($familiar`Crimbo Shrub`);
        if (get(`_shrubDecorated`) === false && get(`shrubGifts`) !== `meat`) {
          CrimboShrub.decorate(`Muscle`, `Prismatic Damage`, `PvP Fights`, `Red Ray`);
        }
      }
      const spit = `if hasskill Open a Big Red Present; skill Open a Big Red Present; endif; if hasskill spit jurassic acid; skill spit jurassic acid; endif; abort;`;
      adv1($location`Shadow Rift`, -1, spit);

      cliExecute(`parka ${curParka}`);
      equipOutfit(curOut);
    }
  }
}

export function fallGuy(): void {
  if (AutumnAton.available()) {
    print(`Fallguy is available!`, `blue`);
    AutumnAton.upgrade();
    if (AutumnAton.turnsForQuest() < myAdventures()) {
      print(`Sending him to Shadow Rift`, `blue`);
      AutumnAton.sendTo($location`Shadow Rift`);
    } else {
      print(`He won't come back in time so we won't send him`, `blue`);
    }
  }
}

export function stillSuit(): void {
  if (get(`stillsuitFamiliar`) === null) {
    visitUrl(`familiar.php?action=equip&pwd=${myHash()}&whichfam=150&whichitem=10932`);
  }
}

export function coldConsult(): void {
  if (
    getWorkshed() === $item`cold medicine cabinet` &&
    get(`_coldMedicineConsults`) <= 5 &&
    totalTurnsPlayed() >= get(`_nextColdMedicineConsult`)
  ) {
    if (
      visitUrl(`campground.php?action=workshed`, false, true).includes("Extrovermectin&trade;") ||
      visitUrl(`campground.php?action=workshed`, false, true).includes("Breathitin")
    ) {
      visitUrl("campground.php?action=workshed");
      runChoice(5);
    }
  }
}

export function frickingNamsilat(): void {
  if (haveEquipped($item`Talisman o' Namsilat`)) {
    abort(`Fricking NAMSILAT`);
  }
}

export function burnMp(burnTo: number): void {
  const bannedEffects = [
    $effect`Drescher's Annoying Noise`,
    $effect`Pride of the Puffin`,
    $effect`The Sonata of Sneakiness`,
    $effect`Smooth Movements`,
    $effect`Musk of the Moose`,
    $effect`Carlweather's Cantata of Confrontation`,
    $effect`Ode to Booze`,
  ];

  while (myMp() - burnTo > 10) {
    const myEffects = getActiveEffects()
      .filter(
        (E) => toSkill(E) !== $skill`none` && mpCost(toSkill(E)) > 0 && !bannedEffects.includes(E)
      )
      .sort((a, b) => haveEffect(b) - haveEffect(a));

    const safetyCheck = myMp();

    for (const eff of myEffects.sort((a, b) => haveEffect(a) - haveEffect(b))) {
      // print(`${myMp() - burnTo}`, `blue`);
      if (myMp() - burnTo < 10) {
        break;
      } else {
        const numCasts = Math.max(
          1,
          Math.min(
            Math.floor((myMp() - burnTo) / mpCost(toSkill(eff))),
            Math.floor((haveEffect(myEffects[0]) - haveEffect(eff)) / turnsPerCast(toSkill(eff)))
          )
        );
        useSkill(numCasts, toSkill(eff));
      }
      //print(`${eff} [${haveEffect(eff)}]`);
    }
    if (myMp() === safetyCheck) {
      break;
    }
  }
}

export function preAdventure(
  additionalFunctions: (() => void)[] = defaultTasks,
  hpGoal?: number,
  mpGoal?: number
): void {
  const hpThreshold = Math.min(4000, (hpGoal ?? 0.9) * myMaxhp());
  restoreHp(hpThreshold);

  if (additionalFunctions) {
    for (const func of additionalFunctions) {
      func();
    }
  }

  const mpThreshold = (mpGoal ?? 0.75) * myMaxmp();
  if (myMp() > mpThreshold) {
    burnMp(mpThreshold);
  }
}

export function main(): void {
  cliExecute(`parka kachungasaur`);
  print(`hehe`);
}

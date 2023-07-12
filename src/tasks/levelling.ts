import { CombatStrategy, Quest, Task } from "grimoire-kolmafia";
import {
  abort,
  adv1,
  availableAmount,
  Class,
  cliExecute,
  drink,
  eat,
  equip,
  equippedItem,
  myClass,
  myFamiliar,
  myHash,
  myHp,
  myLevel,
  myMaxhp,
  myPrimestat,
  restoreHp,
  retrieveItem,
  use,
  useFamiliar,
  useSkill,
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
  $slot,
  $stat,
  AutumnAton,
  byStat,
  Cartography,
  clamp,
  ensureEffect,
  get,
  getKramcoWandererChance,
  have,
  Latte,
  Macro,
  uneffect,
  Witchess,
} from "libram";
import { retroMainstat } from "../lib";

let curOffhand = $item`unbreakable umbrella`;
let curWeapon = $item`June cleaver`;

const levellingOutfit = {
  hat: $item`Daylight Shavings Helmet`,
  back: have($item`unwrapped knock-off retro superhero cape`)
    ? $item`unwrapped knock-off retro superhero cape`
    : $item`Catherine Wheel`,
  shirt: $item`Jurassic Parka`,
  weapon: $item`June cleaver`,
  offhand: $item`unbreakable umbrella`,
  pants: $item`designer sweatpants`,
  acc1: $item`backup camera`,
  acc2: $item`your cowboy boots`,
  acc3: $item`combat lover's locket`,
  familiar: $familiar`Melodramedary`,
  famequip: $item`tiny stillsuit`,
};

const facialExpression = byStat({
  Muscle: $effect`Quiet Determination`,
  Mysticality: $effect`Inscrutable Gaze`,
  Moxie: $effect`Quiet Desperation`,
});

const showerEffect = byStat({
  Muscle: $effect`Muscle Unbound`,
  Mysticality: $effect`Thaumodynamic`,
  Moxie: $effect`So Fresh and So Clean`,
});

const levellingEffects = [
  //Starter Buffs
  $effect`Mariachi Mood`,
  $effect`Seal Clubbing Frenzy`,
  $effect`Saucemastery`,
  $effect`Patience of the Tortoise`,
  $effect`Disco State of Mind`,
  $effect`Pasta Oneness`,

  //Tiny buffs
  $effect`Reptilian Fortitude`,
  myClass() === $class`Turtle Tamer`
    ? $effect`Blessing of the War Snapper`
    : $effect`Disdain of the War Snapper`,
  $effect`Blubbered Up`,
  $effect`Tenacity of the Snapper`,

  //Bigger stat buffs
  $effect`Disco Fever`,
  $effect`Rage of the Reindeer`,
  $effect`Big`,
  $effect`Song of Bravado`,

  //Facial
  facialExpression,

  //Feelings
  $effect`Feeling Excited`,
  $effect`Feeling Peaceful`,

  //Songs
  $effect`Stevedave's Shanty of Superiority`,
  $effect`Ur-Kel's Aria of Annoyance`,
  $effect`Fat Leon's Phat Loot Lyric`,
  $effect`Aloysius' Antiphon of Aptitude`,

  //ML and Bonus Stats
  $effect`Carol of the Thrills`,
  $effect`Pride of the Puffin`,
  $effect`Drescher's Annoying Noise`,

  //Defensive
  $effect`Ghostly Shell`,
  $effect`Astral Shell`,
  $effect`Jalapeño Saucesphere`,
  $effect`Spiky Shell`,
  $effect`Elemental Saucesphere`,
  $effect`Scarysauce`,
  myClass() === $class`Pastamancer`
    ? $effect`Shield of the Pastalord`
    : $effect`Flimsy Shield of the Pastalord`,

  //Elemental Weapon Damage
  $effect`Your Fifteen Minutes`,
  $effect`Frostbeard`,
  $effect`Takin' It Greasy`,
  $effect`Rotten Memories`,
  $effect`Pyromania`,
  $effect`Intimidating Mien`,

  //Familiar!
  $effect`Curiosity of Br'er Tarrypin`,
  $effect`Empathy`,
  $effect`Leash of Linguini`,
  $effect`Blood Bond`,

  //Misc
  $effect`Carol of the Bulls`,
  $effect`Carol of the Hells`,
  $effect`Singer's Faithful Ocelot`,
  $effect`Bendin' Hell`,
];

export const levellingQuest: Quest<Task> = {
  name: `Levelling`,
  completed: () => (get(`_gingerbreadMobHitUsed`) || myLevel() >= 15) && have($item`battle broom`),
  tasks: [
    {
      name: `Beaten Up!`,
      completed: () => !have($effect`Beaten Up`),
      do: () => abort(`Beaten up unexpectedly!`),
    },
    {
      name: `Fall Guy!`,
      ready: () => get(`_shadowAffinityToday`) && get(`shadowRiftIngress`) !== ``,
      completed: () => !AutumnAton.available(),
      do: (): void => {
        AutumnAton.upgrade();
        AutumnAton.sendTo($location`Shadow Rift`);
      },
    },
    {
      name: `Swap Shortcook`,
      ready: () =>
        have($effect`Spit Upon`) &&
        (myFamiliar() !== $familiar`Machine Elf` ||
          ![1, 2, 3, 4].includes(get(`_machineTunnelsAdv`))),
      completed: () =>
        myFamiliar() === $familiar`Shorter-Order Cook` || have($item`short stack of pancakes`),
      do: () => useFamiliar($familiar`Shorter-Order Cook`),
    },
    {
      name: `Swap Eagle`,
      ready: () =>
        have($effect`Spit Upon`) &&
        (myFamiliar() !== $familiar`Machine Elf` ||
          ![1, 2, 3, 4].includes(get(`_machineTunnelsAdv`))) &&
        have($item`short stack of pancakes`),
      completed: () => myFamiliar() === $familiar`Patriotic Eagle`,
      do: () => useFamiliar($familiar`Patriotic Eagle`),
    },
    {
      name: `Drink Pilsners`,
      ready: () => myLevel() >= 11 && availableAmount($item`astral pilsner`) >= 4,
      prepare: (): void => {
        uneffect($effect`Fat Leon's Phat Loot Lyric`);
        ensureEffect($effect`Ode to Booze`, 4);
      },
      completed: () => availableAmount($item`astral pilsner`) < 4,
      do: () => drink(4, $item`astral pilsner`),
      post: (): void => {
        uneffect($effect`Ode to Booze`);
        ensureEffect($effect`Fat Leon's Phat Loot Lyric`);
      },
    },
    {
      name: `June Cleave`,
      ready: () => get(`_juneCleaverFightsLeft`) === 0,
      prepare: () => (curWeapon = equippedItem($slot`weapon`)),
      completed: () => get(`_juneCleaverFightsLeft`) > 0,
      do: () => adv1($location`The Sleazy Back Alley`, -1, "abort;"),
      outfit: {
        weapon: $item`June cleaver`,
      },
      post: (): void => {
        if (have($effect`Beaten Up`)) {
          uneffect($effect`Beaten Up`);
        }
        equip($slot`weapon`, curWeapon);
      },
    },
    {
      name: `Restore HP`,
      ready: () => myHp() <= myMaxhp() / 2,
      completed: () => myHp() > myMaxhp() / 2,
      do: () => restoreHp(clamp(1000, myMaxhp() / 2 + 10, myMaxhp())),
    },
    {
      name: `Kramco Goblingo`,
      prepare: (): void => {
        curOffhand = equippedItem($slot`off-hand`);
      },
      ready: () =>
        getKramcoWandererChance() === 1 &&
        get(`_latteRefillsUsed`) >= 3 &&
        get(`_neverendingPartyFreeTurns`) >= 1,
      completed: () => getKramcoWandererChance() < 1,
      do: () => $location`The Neverending Party`,
      outfit: {
        offhand: $item`Kramco Sausage-o-Matic™`,
      },
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Sing Along`)
          .attack()
          .repeat()
      ),
      post: () => equip($slot`off-hand`, curOffhand),
    },
    {
      name: `April Shower`,
      completed: () => have(showerEffect) || get(`_aprilShower`),
      do: () => ensureEffect(showerEffect),
    },
    {
      name: `Express Yourself (In Case of Myst)`,
      completed: () => have(facialExpression),
      do: () => ensureEffect(facialExpression),
    },
    {
      name: `Use 10% Bonus`,
      completed: () => !have($item`a ten-percent bonus`),
      do: () => use(1, $item`a ten-percent bonus`),
    },
    {
      name: `Eat Legend Dishes`,
      ready: () => have($effect`Everything Looks Red`),
      completed: () =>
        (get(`pizzaOfLegendEaten`) && get(`calzoneOfLegendEaten`)) ||
        (!have($item`Pizza of Legend`) && !have($item`Calzone of Legend`)),
      do: () => [$item`Pizza of Legend`, $item`Calzone of Legend`].forEach((i) => eat(1, i)),
    },
    {
      name: `Lyle Buff`,
      completed: () => get(`_lyleFavored`),
      do: () => cliExecute(`monorail`),
    },
    {
      name: `Telescope`,
      completed: () => get(`telescopeLookedHigh`),
      do: () => cliExecute(`telescope look high`),
    },
    {
      name: `Get Catherine Wheel`,
      completed: () =>
        have($item`Catherine Wheel`) || have($item`unwrapped knock-off retro superhero cape`),
      do: () => retrieveItem(1, $item`Catherine Wheel`),
    },
    {
      name: `Boxing Daycare Buff`,
      completed: () =>
        [$effect`Muddled`, $effect`Ten out of Ten`, $effect`Uncucumbered`].some((ef) => have(ef)) ||
        get(`_daycareSpa`),
      do: () => cliExecute(`daycare ${myPrimestat().toString().toLowerCase()}`),
    },
    {
      name: `Wish for A Contender`,
      completed: () => have($effect`A Contender`) || get(`_genieWishesUsed`) >= 2 || true,
      do: () => cliExecute(`genie effect A Contender`),
    },
    {
      name: `Wish for New and Improved`,
      completed: () => have($effect`New and Improved`) || get(`_genieWishesUsed`) >= 2,
      do: () => cliExecute(`genie effect New and Improved`),
    },
    {
      name: `Use Market Consumables`,
      completed: () =>
        [$effect`Glittering Eyelashes`, $effect`Go Get 'Em, Tiger!`, $effect`Butt-Rock Hair`].every(
          (ef) => have(ef)
        ),
      do: () =>
        [
          $effect`Glittering Eyelashes`,
          $effect`Go Get 'Em, Tiger!`,
          $effect`Butt-Rock Hair`,
        ].forEach((ef) => ensureEffect(ef, 9)),
    },
    {
      name: `Use Wasabi Marble Soda`,
      completed: () => !have($item`wasabi marble soda`) || have($effect`Wasabi With You`),
      do: () => use(1, $item`wasabi marble soda`),
    },
    {
      name: `Eat sosig`,
      ready: () => availableAmount($item`magical sausage casing`) > 0,
      completed: () => get(`_sausagesEaten`) > 0,
      do: (): void => {
        retrieveItem(1, $item`magical sausage`);
        eat(1, $item`magical sausage`);
      },
    },
    {
      name: `Summon Reagents`,
      completed: () => get(`reagentSummons`) > 0,
      do: () => useSkill(1, $skill`Advanced Saucecrafting`),
    },
    {
      name: `Summon Limes`,
      completed: () => get(`_preventScurvy`),
      do: () => useSkill(1, $skill`Prevent Scurvy and Sobriety`),
    },
    {
      name: `Become Occultic`,
      completed: () => have($effect`Mystically Oiled`),
      do: (): void => {
        retrieveItem(1, $item`ointment of the occult`);
        ensureEffect($effect`Mystically Oiled`);
      },
    },
    {
      name: `Become Phorceful`,
      completed: () => have($effect`Phorcefullness`),
      do: (): void => {
        retrieveItem(1, $item`philter of phorce`);
        ensureEffect($effect`Phorcefullness`);
      },
    },
    {
      name: `Stabilize your Oils`,
      completed: () => have($effect`Stabilizing Oiliness`),
      do: (): void => {
        retrieveItem(1, $item`oil of stability`);
        ensureEffect($effect`Stabilizing Oiliness`);
      },
    },
    {
      name: `Latte to Full MP`,
      prepare: () => restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp())),
      completed: () => get(`_latteRefillsUsed`) >= 2,
      do: (): void => {
        adv1($location`Uncle Gator's Country Fun-Time Liquid Waste Sluice`, -1);
        Latte.fill(`pumpkin`, `cinnamon`, `vanilla`);
      },
      outfit: {
        offhand: $item`latte lovers member's mug`,
        famequip: $item`tiny stillsuit`,
        modifier: `mp`,
      },
      effects: [
        $effect`Big`,
        $effect`Song of Bravado`,
        $effect`Stevedave's Shanty of Superiority`,
        myClass() !== $class`Sauceror`
          ? $effect`[1457]Blood Sugar Sauce Magic`
          : $effect`[1458]Blood Sugar Sauce Magic`,
      ],
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Gulp Latte`)
          .trySkill($skill`Throw Latte on Opponent`)
          .abort()
      ),
    },
    {
      name: `Buff the heck up oomfie!`,
      completed: () => have($effect`Bendin' Hell`) || get(`_speakeasyFreeFights`) === 3,
      do: () => levellingEffects.forEach((ef) => ensureEffect(ef)),
    },
    {
      name: `Latte for Later`,
      completed: () => get(`_latteRefillsUsed`) >= 3,
      do: (): void => {
        adv1($location`Uncle Gator's Country Fun-Time Liquid Waste Sluice`, -1);
        Latte.fill(`pumpkin`, `cinnamon`, `vanilla`);
      },
      outfit: {
        hat: $item`Daylight Shavings Helmet`,
        back: have($item`unwrapped knock-off retro superhero cape`)
          ? $item`unwrapped knock-off retro superhero cape`
          : $item`Catherine Wheel`,
        shirt: $item`Jurassic Parka`,
        weapon: $item`June cleaver`,
        pants: $item`designer sweatpants`,
        acc1: $item`backup camera`,
        acc2: $item`your cowboy boots`,
        acc3: $item`combat lover's locket`,
        familiar: $familiar`Melodramedary`,
        famequip: $item`tiny stillsuit`,
        offhand: $item`latte lovers member's mug`,
        modes: have($item`unwrapped knock-off retro superhero cape`)
          ? {
              parka: `spikolodon`,
              umbrella: `broken`,
              backupcamera: `ml`,
              retrocape: [retroMainstat(), `thrill`],
            }
          : {
              parka: `spikolodon`,
              umbrella: `broken`,
              backupcamera: `ml`,
            },
      },
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Gulp Latte`)
          .trySkill($skill`Throw Latte on Opponent`)
          .abort()
      ),
    },
    {
      name: `Remove Bloodsugar`,
      completed: () =>
        !have($effect`[1457]Blood Sugar Sauce Magic`) &&
        !have($effect`[1458]Blood Sugar Sauce Magic`),
      do: () => useSkill(1, $skill`Blood Sugar Sauce Magic`),
    },
    {
      name: `Flapper Mapper`,
      completed: () => get(`_monstersMapped`) >= 2,
      do: () =>
        Cartography.mapMonster(
          $location`An Unusually Quiet Barroom Brawl`,
          $monster`goblin flapper`
        ),
      outfit: {
        offhand: $item`unbreakable umbrella`,
        familiar: $familiar`Nanorhino`,
        famequip: $item`tiny stillsuit`,
        modes: {
          umbrella: `broken`,
          retrocape: [retroMainstat(), `thrill`],
        },
      },
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Feel Envy`)
          .trySkill($skill`Lunging Thrust-Smack`)
          .attack()
          .repeat()
      ),
    },
    {
      name: `Oliver's Place`,
      completed: () => get(`_speakeasyFreeFights`) === 3,
      do: $location`An Unusually Quiet Barroom Brawl`,
      outfit: levellingOutfit,
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Sing Along`)
          .attack()
          .repeat()
      ),
    },
    {
      name: `Pick up a club!`,
      completed: () => have($item`seal-clubbing club`),
      do: () => retrieveItem(1, $item`seal-clubbing club`),
    },
    {
      name: `Seal Fights`,
      completed: () => myClass() !== Class.get(`Seal Clubber`) || get(`_sealsSummoned`) >= 5,
      do: (): void => {
        retrieveItem(1, $item`figurine of an ancient seal`);
        retrieveItem(3, $item`seal-blubber candle`);
        use(1, $item`figurine of an ancient seal`);
      },
      outfit: {
        weapon: $item`seal-clubbing club`,
      },
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Sing Along`)
          .attack()
          .repeat()
      ),
    },
    {
      name: `Get Payphone Quest`,
      completed: () => get(`_shadowAffinityToday`),
      do: () => use(1, $item`closed-circuit pay phone`),
      choices: { 1497: 1 },
    },
    {
      name: `Payphone Freefights (extingo)`,
      ready: () => have($effect`Shadow Affinity`),
      completed: () =>
        get(`encountersUntilSRChoice`) === 0 ||
        have($item`Rufus's shadow lodestone`) ||
        get(`_fireExtinguisherCharge`) <= 10,
      do: $location`Shadow Rift (The Misspelled Cemetary)`,
      outfit: {
        offhand: $item`unbreakable umbrella`,
        hat: $item`Daylight Shavings Helmet`,
        weapon: $item`industrial fire extinguisher`,
        modes: { umbrella: `broken` },
      },
      combat: new CombatStrategy().macro(
        Macro.if_(
          $monster`shadow slab`,
          Macro.trySkill($skill`Fire Extinguisher: Polar Vortex`)
            .trySkill($skill`Fire Extinguisher: Polar Vortex`)
            .trySkill($skill`Fire Extinguisher: Polar Vortex`)
            .trySkill($skill`Fire Extinguisher: Polar Vortex`)
            .trySkill($skill`Fire Extinguisher: Polar Vortex`)
            .trySkill($skill`Fire Extinguisher: Polar Vortex`)
            .trySkill($skill`Fire Extinguisher: Polar Vortex`)
            .trySkill($skill`Fire Extinguisher: Polar Vortex`)
            .trySkill($skill`Fire Extinguisher: Polar Vortex`)
        )
          .trySkill($skill`Sing Along`)
          .attack()
          .repeat()
      ),
    },
    {
      name: `Payphone Freefights (cleaver)`,
      ready: () => have($effect`Shadow Affinity`),
      completed: () =>
        get(`encountersUntilSRChoice`) === 0 || have($item`Rufus's shadow lodestone`),
      do: $location`Shadow Rift (The Misspelled Cemetary)`,
      outfit: {
        offhand: $item`unbreakable umbrella`,
        weapon: $item`June cleaver`,
        modes: { umbrella: `broken` },
      },
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Sing Along`)
          .attack()
          .repeat()
      ),
    },
    {
      name: `Payphone Freefights (bossa)`,
      prepare: () => restoreHp(myMaxhp()),
      ready: () => get(`encountersUntilSRChoice`) === 0,
      completed: () => have($item`Rufus's shadow lodestone`) || get(`questRufus`) === `step1`,
      do: $location`Shadow Rift (The Misspelled Cemetary)`,
      outfit: {
        weapon: $item`June cleaver`,
        familiar: $familiar`Machine Elf`,
        famequip: $item`tiny stillsuit`,
        offhand: $item`unbreakable umbrella`,
        modes: { umbrella: `broken` },
      },
      combat: new CombatStrategy().macro(
        Macro.if_(
          $monster`shadow matrix`,
          Macro.trySkill($skill`Stuffed Mortar Shell`).trySkillRepeat($skill`Saucegeyser`)
        ).trySkillRepeat($skill`Northern Explosion`)
      ),
    },
    {
      name: `Retrieve Spooky Lodestone`,
      ready: () => get(`questRufus`) === `step1`,
      completed: () => have($item`Rufus's shadow lodestone`),
      do: () => use(1, $item`closed-circuit pay phone`),
      post: () => cliExecute(`fold garbage shirt`),
    },
    {
      name: `Set Snojo Controls`,
      completed: () => get(`snojoSetting`) === $stat`Moxie`,
      do: (): void => {
        visitUrl(`place.php?whichplace=snojo&action=snojo_controller`);
        visitUrl(`choice.php?pwd=${myHash()}&whichchoice=1118&option=3`);
      },
    },
    {
      name: `Snojo Fights`,
      completed: () => get(`_snojoFreeFights`) >= 10,
      do: $location`The X-32-F Combat Training Snowman`,
      outfit: {
        shirt: $item`makeshift garbage shirt`,
        offhand: $item`unbreakable umbrella`,
        familiar: $familiar`Melodramedary`,
        famequip: $item`tiny stillsuit`,
        modes: { umbrella: `broken` },
      },
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`%fn, spit on me!`)
          .trySkill($skill`Sing Along`)
          .attack()
          .repeat()
      ),
    },
    {
      name: `Visit Hottub`,
      completed: () =>
        [
          $effect`Snowballed`,
          $effect`Bruised`,
          $effect`Relaxed Muscles`,
          $effect`Hypnotized`,
          $effect`Bad Haircut`,
        ].every((ef) => !have(ef)),
      do: () => visitUrl(`clan_viplounge.php?action=hottub`),
    },
    {
      name: `Witchess Fights`,
      completed: () => get(`_witchessFights`) >= 3,
      do: () => Witchess.fightPiece($monster`Witchess Bishop`),
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`%fn, spit on me!`)
          .trySkill($skill`Sing Along`)
          .attack()
          .repeat()
      ),
      outfit: {
        famequip: $item`tiny stillsuit`,
      },
    },
    {
      name: `Deep Machine Fights`,
      completed: () => get(`_machineTunnelsAdv`) >= 5,
      do: () => $location`The Deep Machine Tunnels`,
      outfit: {
        offhand: $item`unbreakable umbrella`,
        familiar: $familiar`Machine Elf`,
        famequip: $item`tiny stillsuit`,
        modes: { umbrella: `broken` },
      },
      combat: new CombatStrategy().macro(() =>
        Macro.trySkill($skill`%fn, spit on me!`)
          .externalIf(
            get(`lastCopyableMonster`) === $monster`Witchess Bishop`,
            Macro.trySkill($skill`Feel Nostalgic`)
          )
          .trySkill($skill`Sing Along`)
          .attack()
          .repeat()
      ),
    },
    {
      name: `Awful Bad things have happened, need more spit`,
      completed: () => have($effect`Spit Upon`) || myFamiliar() === $familiar`Melodramedary`,
      do: () => useFamiliar($familiar`Melodramedary`),
    },
    {
      name: `Neverending Free Fights`,
      completed: () => get(`_neverendingPartyFreeTurns`) >= 10,
      do: $location`The Neverending Party`,
      choices: { 1322: 2, 1324: 5, 1326: 2 },
      combat: new CombatStrategy().macro(() =>
        Macro.trySkill($skill`Bowl Sideways`)
          .trySkill($skill`%fn, spit on me!`)
          .externalIf(
            get(`lastCopyableMonster`) === $monster`sausage goblin`,
            Macro.trySkill($skill`Feel Nostalgic`)
          )
          .trySkill($skill`Sing Along`)
          .trySkillRepeat($skill`Lunging Thrust-Smack`)
      ),
      outfit: {
        offhand: $item`unbreakable umbrella`,
        famequip: $item`tiny stillsuit`,
        modes: { umbrella: `broken` },
      },
    },
    {
      name: `Witchess Witch`,
      prepare: () => restoreHp(myMaxhp()),
      completed: () => have($item`battle broom`),
      do: () => Witchess.fightPiece($monster`Witchess Witch`),
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`%fn, spit on me!`)
          .trySkill($skill`Sing Along`)
          .trySkillRepeat($skill`Lunging Thrust-Smack`)
      ),
      outfit: {
        famequip: $item`tiny stillsuit`,
      },
    },
    {
      name: `Witchess Queen`,
      prepare: () => restoreHp(myMaxhp()),
      completed: () => have($item`very pointy crown`),
      do: () => Witchess.fightPiece($monster`Witchess Queen`),
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Sing Along`)
          .attack()
          .repeat()
      ),
      outfit: {
        famequip: $item`tiny stillsuit`,
      },
    },
    {
      name: `Shattering Punches`,
      completed: () => get(`_shatteringPunchUsed`) >= 3,
      do: $location`The Neverending Party`,
      choices: { 1322: 2, 1324: 5, 1326: 2 },
      outfit: {
        weapon: have($item`fish hatchet`) ? $item`fish hatchet` : $item`June cleaver`,
        acc2: $item`Cincho de Mayo`,
        famequip: $item`tiny stillsuit`,
      },
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`%fn, spit on me!`)
          .trySkill($skill`Bowl Sideways`)
          .trySkill($skill`Feel Pride`)
          .trySkill($skill`Cincho: Confetti Extravaganza`)
          .trySkill($skill`Sing Along`)
          .trySkill($skill`Shattering Punch`)
          .abort()
      ),
    },
    {
      name: `Chest X-rays`,
      completed: () => get(`_chestXRayUsed`) >= 3,
      do: $location`The Neverending Party`,
      choices: { 1322: 2, 1324: 5, 1326: 2 },
      outfit: {
        famequip: $item`tiny stillsuit`,
        acc2: $item`Lil' Doctor™ bag`,
      },
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`%fn, spit on me!`)
          .trySkill($skill`Bowl Sideways`)
          .trySkill($skill`Sing Along`)
          .trySkill($skill`Chest X-Ray`)
          .abort()
      ),
    },
    {
      name: `Mob-Hit`,
      completed: () => get(`_gingerbreadMobHitUsed`),
      do: $location`The Neverending Party`,
      choices: { 1322: 2, 1324: 5, 1326: 2 },
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`%fn, spit on me!`)
          .trySkill($skill`Bowl Sideways`)
          .trySkill($skill`Sing Along`)
          .trySkill($skill`Gingerbread Mob Hit`)
          .abort()
      ),
    },
  ],
};

import { CombatStrategy, Quest, Task } from "grimoire-kolmafia";
import {
  Location,
  Monster,
  abort,
  adv1,
  availableAmount,
  cliExecute,
  drink,
  eat,
  mpCost,
  myClass,
  myHash,
  myHp,
  myLevel,
  myMaxhp,
  myMaxmp,
  myMp,
  myPrimestat,
  restoreHp,
  restoreMp,
  retrieveItem,
  runChoice,
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
  $monster,
  $skill,
  $stat,
  AprilingBandHelmet,
  AutumnAton,
  Cartography,
  Clan,
  Latte,
  Macro,
  Witchess,
  byStat,
  clamp,
  ensureEffect,
  get,
  getKramcoWandererChance,
  have,
  uneffect,
} from "libram";
import { args, customMacro, familiarAttacks, juneCleaverTask, loss, oomfieOutfit } from "../lib";

function shadowRiftChoice(): Location {
  /*
  if (args.fam) {
    return $location`Shadow Rift (The Right Side of the Tracks)`;
  } else {
    return $location`Shadow Rift (The Misspelled Cemetary)`;
  }*/
  return $location`Shadow Rift (The Misspelled Cemetary)`;
}

function shadowRiftPocketTarget(): Monster {
  /*
  if (args.fam) {
    return $monster`shadow prism`;
  } else {
    return $monster`shadow tree`;
  }*/
  return $monster`shadow slab`;
}

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
  $effect`Blood Bubble`,

  //Elemental Weapon Damage
  $effect`Your Fifteen Minutes`,
  $effect`Frostbeard`,
  $effect`Takin' It Greasy`,
  $effect`Rotten Memories`,
  $effect`Pyromania`,
  $effect`Intimidating Mien`,

  //Familiar!
  $effect`Curiosity of Br'er Tarrypin`,
  familiarAttacks() ? $effect`Big` : $effect`Empathy`,
  familiarAttacks() ? $effect`Big` : $effect`Leash of Linguini`,
  familiarAttacks() ? $effect`Big` : $effect`Blood Bond`,

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
    loss,
    {
      name: `Beaten Up!`,
      completed: () => !have($effect`Beaten Up`),
      do: () => abort(`Beaten up unexpectedly!`),
    },
    juneCleaverTask,
    {
      name: `Fall Guy!`,
      ready: () => get(`_shadowAffinityToday`) && get(`shadowRiftIngress`) !== ``,
      completed: () => !AutumnAton.available(),
      do: (): void => {
        AutumnAton.sendTo($location`Shadow Rift`);
      },
    },
    {
      name: `Apriling Band Helmet: -Combat Early!`,
      ready: () => AprilingBandHelmet.have(),
      completed: () =>
        !AprilingBandHelmet.canChangeSong() || have($effect`Apriling Band Patrol Beat`),
      do: () => AprilingBandHelmet.conduct(`Apriling Band Patrol Beat`),
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
      name: `Bastille Battalion`,
      completed: () => get(`_bastilleGames`) >= 1,
      do: () => cliExecute(`bastille babar brutalist gesture`),
    },
    {
      name: `Campway Cloudspeaking`,
      completed: () => get(`_campAwayCloudBuffs`) === 1,
      do: () => visitUrl("place.php?whichplace=campaway&action=campaway_sky"),
      limit: { skip: 4 },
    },
    {
      name: `Restore HP`,
      ready: () => myHp() <= myMaxhp() / 2,
      completed: () => myHp() > myMaxhp() / 2,
      do: () => restoreHp(clamp(1000, myMaxhp() / 2 + 10, myMaxhp())),
    },
    {
      name: `Restore MP`,
      ready: () => myMp() < 50 && get(`sweat`) >= 95,
      completed: () => myMp() >= 50,
      do: () => useSkill(1, $skill`Sip Some Sweat`),
    },
    {
      name: `Eat sosig`,
      ready: () => availableAmount($item`magical sausage casing`) > 0,
      completed: () => myMp() >= 850 || myMaxmp() - myMp() <= 999,
      do: (): void => {
        retrieveItem(1, $item`magical sausage`);
        eat(1, $item`magical sausage`);
      },
      effects: [
        myClass() !== $class`Sauceror`
          ? $effect`[1457]Blood Sugar Sauce Magic`
          : $effect`[1458]Blood Sugar Sauce Magic`,
      ],
    },
    {
      name: `Kramco Goblingo`,
      ready: () => getKramcoWandererChance() === 1 && get(`_neverendingPartyFreeTurns`) >= 1,
      completed: () => getKramcoWandererChance() < 1,
      do: () => $location`The Neverending Party`,
      outfit: () =>
        oomfieOutfit({
          offhandOverride: $item`Kramco Sausage-o-Matic™`,
          shirtOverride: $item`makeshift garbage shirt`,
        }),
      combat: new CombatStrategy().autoattack(
        Macro.trySkill($skill`Sing Along`)
          .attack()
          .repeat(),
      ),
    },
    {
      name: `Angry Agate`,
      ready: () => have($item`angry agate`),
      completed: () => have($effect`Misplaced Rage`),
      do: () => use(1, $item`angry agate`),
    },
    {
      name: `Filled Mosquito`,
      ready: () => have($item`filled mosquito`),
      completed: () => have($effect`Wisdom of Others`),
      do: () => use(1, $item`filled mosquito`),
    },
    {
      name: `April Shower`,
      prepare: () => Clan.join(`Bonus Adventures from Hell`),
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
      outfit: {
        offhand: $item`familiar scrapbook`,
      },
    },
    {
      name: `Eat Legend Dishes`,
      ready: () => have($effect`Everything Looks Red`),
      completed: () =>
        (get(`pizzaOfLegendEaten`) && get(`calzoneOfLegendEaten`)) ||
        (!have($item`Pizza of Legend`) && !have($item`Calzone of Legend`)),
      do: () => [$item`Pizza of Legend`, $item`Calzone of Legend`].forEach((i) => eat(1, i)),
      outfit: {
        offhand: $item`familiar scrapbook`,
      },
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
      completed: () => !args.fam || have($effect`A Contender`) || get(`_genieWishesUsed`) >= 2,
      do: () => cliExecute(`genie effect A Contender`),
    },
    {
      name: `Check G-9 Status`,
      completed: () => get(`_g9Effect`) !== 0,
      do: () => visitUrl(`desc_item.php?whichitem=661049168`),
    },
    {
      name: `Wish for G-9`,
      ready: () => get(`_g9Effect`) > 200,
      completed: () => have($effect`Experimental Effect G-9`) || get(`_genieWishesUsed`) >= 2,
      do: () => cliExecute(`genie effect Experimental Effect G-9`),
    },
    {
      name: `Wish for New and Improved`,
      completed: () =>
        have($effect`Experimental Effect G-9`) ||
        have($effect`New and Improved`) ||
        get(`_genieWishesUsed`) >= 2,
      do: () => cliExecute(`genie effect New and Improved`),
    },
    {
      name: `Use Market Consumables`,
      completed: () =>
        [$effect`Glittering Eyelashes`, $effect`Go Get 'Em, Tiger!`, $effect`Butt-Rock Hair`].every(
          (ef) => have(ef),
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
      name: `Summon Reagents`,
      completed: () => get(`reagentSummons`) > 0,
      do: () => useSkill(1, $skill`Advanced Saucecrafting`),
    },
    {
      name: `Become Occultic`,
      completed: () => have($effect`Mystically Oiled`),
      do: (): void => {
        retrieveItem(1, $item`ointment of the occult`);
        use(1, $item`ointment of the occult`);
      },
    },
    {
      name: `Red Letter`,
      ready: () => have($item`red letter`),
      completed: () => have($effect`Red Lettered`),
      do: () => use(1, $item`red letter`),
    },
    {
      name: `Pyrite Pride`,
      ready: () => have($item`pebble of proud pyrite`),
      completed: () => have($effect`Pyrite Pride`),
      do: () => use(1, $item`pebble of proud pyrite`),
    },
    {
      name: `Summon Limes`,
      completed: () => get(`_preventScurvy`),
      do: () => useSkill(1, $skill`Prevent Scurvy and Sobriety`),
    },
    {
      name: `Become Phorceful`,
      completed: () => have($effect`Phorcefullness`),
      do: (): void => {
        retrieveItem(1, $item`philter of phorce`);
        use(1, $item`philter of phorce`);
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
      completed: () =>
        myMp() >= 250 || get(`_latteRefillsUsed`) >= 2 || have($effect`Bendin' Hell`),
      do: (): void => {
        adv1($location`Uncle Gator's Country Fun-Time Liquid Waste Sluice`, -1);
        if (get(`_latteDrinkUsed`)) {
          Latte.fill(`pumpkin`, `cinnamon`, `vanilla`);
        }
      },
      outfit: () =>
        oomfieOutfit({ offhandOverride: $item`latte lovers member's mug`, modifier: `mp` }),
      effects: [
        $effect`Big`,
        $effect`Song of Bravado`,
        $effect`Stevedave's Shanty of Superiority`,
        myClass() !== $class`Sauceror`
          ? $effect`[1457]Blood Sugar Sauce Magic`
          : $effect`[1458]Blood Sugar Sauce Magic`,
      ],
      combat: new CombatStrategy().autoattack(
        Macro.trySkill($skill`Gulp Latte`)
          .trySkill($skill`Throw Latte on Opponent`)
          .abort(),
      ),
    },
    {
      name: `Buff the heck up oomfie!`,
      //completed: () => have($effect`Bendin' Hell`) || get(`_speakeasyFreeFights`) === 3,
      completed: () => levellingEffects.every((ef) => have(ef)),
      do: () => levellingEffects.forEach((ef) => ensureEffect(ef)),
    },
    {
      name: `Refill Latte`,
      completed: () => !get(`_latteBanishUsed`) || get(`_latteRefillsUsed`) >= 2,
      do: () => Latte.fill(`cinnamon`, `pumpkin`, `vanilla`),
    },
    {
      name: `Summon Love Songs`,
      completed: () =>
        !have($skill`Summon Love Song`) || mpCost($skill`Summon Love Song`) + 350 > myMp(),
      do: () => useSkill(1, $skill`Summon Love Song`),
    },
    {
      name: `Latte for Later`,
      ready: () => myMaxmp() >= 6000,
      completed: () => get(`_latteRefillsUsed`) >= 2,
      do: (): void => {
        adv1($location`Uncle Gator's Country Fun-Time Liquid Waste Sluice`, -1);
        //Latte.fill(`pumpkin`, `cinnamon`, `vanilla`);
      },
      outfit: () =>
        oomfieOutfit({
          offhandOverride: $item`latte lovers member's mug`,
          modifier: `mp`,
        }),
      combat: new CombatStrategy().autoattack(
        Macro.trySkill($skill`Gulp Latte`)
          .trySkill($skill`Throw Latte on Opponent`)
          .abort(),
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
      completed: () => get(`_monstersMapped`) >= 3 || have($item`imported taffy`),
      do: () =>
        Cartography.mapMonster(
          $location`An Unusually Quiet Barroom Brawl`,
          $monster`goblin flapper`,
        ),
      outfit: () =>
        oomfieOutfit({
          backOverride:
            !have($effect`Wolfish Form`) || !have($effect`Bat-Adjacent Form`)
              ? $item`vampyric cloake`
              : undefined,
          offhandOverride: $item`unbreakable umbrella`,
          modesOverride: {
            umbrella: `broken`,
          },
          familiarOverride: $familiar`Ghost of Crimbo Carols`,
          famequipOverride: $item.none,
        }),
      combat: new CombatStrategy().autoattack(() =>
        Macro.ifHolidayWanderer(Macro.attack().repeat())
          .trySkill($skill`Feel Envy`)
          .externalIf(!have($effect`Wolfish Form`), Macro.trySkill($skill`Become a Wolf`))
          .externalIf(
            have($effect`Wolfish Form`) && !have($effect`Bat-Adjacent Form`),
            Macro.trySkill($skill`Become a Bat`),
          )
          .attack()
          .repeat(),
      ),
    },
    {
      name: `Oliver's Place (Nanorhino)`,
      completed: () =>
        get(`_speakeasyFreeFights`) >= 3 ||
        !have($familiar`Nanorhino`) ||
        [$effect`Nanobrawny`, $effect`Nanobrainy`].some((ef) => have(ef)) ||
        args.fam,
      do: () => $location`An Unusually Quiet Barroom Brawl`,
      outfit: () =>
        oomfieOutfit({
          backOverride:
            !have($effect`Wolfish Form`) || !have($effect`Bat-Adjacent Form`)
              ? $item`vampyric cloake`
              : undefined,
          familiarOverride: $familiar`Nanorhino`,
        }),
      combat: new CombatStrategy().autoattack(() =>
        Macro.trySkill($skill`Sing Along`)
          .externalIf(!have($effect`Wolfish Form`), Macro.trySkill($skill`Become a Wolf`))
          .externalIf(
            have($effect`Wolfish Form`) && !have($effect`Bat-Adjacent Form`),
            Macro.trySkill($skill`Become a Bat`),
          )
          .trySkill($skill`Lunging Thrust-Smack`)
          .attack()
          .repeat(),
      ),
    },
    {
      name: `Oliver's Place`,
      completed: () => get(`_speakeasyFreeFights`) === 3,
      do: $location`An Unusually Quiet Barroom Brawl`,
      outfit: () =>
        oomfieOutfit({
          backOverride:
            !have($effect`Wolfish Form`) || !have($effect`Bat-Adjacent Form`)
              ? $item`vampyric cloake`
              : undefined,
        }),
      combat: new CombatStrategy().autoattack(() =>
        Macro.trySkill($skill`Sing Along`)
          .externalIf(!have($effect`Wolfish Form`), Macro.trySkill($skill`Become a Wolf`))
          .externalIf(
            have($effect`Wolfish Form`) && !have($effect`Bat-Adjacent Form`),
            Macro.trySkill($skill`Become a Bat`),
          )
          .attack()
          .repeat(),
      ),
    },
    {
      name: `Pick up a club!`,
      completed: () => args.fam || have($item`seal-clubbing club`),
      do: () => retrieveItem(1, $item`seal-clubbing club`),
    },
    {
      name: `Seal Fights`,
      completed: () => myClass() !== $class`Seal Clubber` || get(`_sealsSummoned`) >= 5,
      do: (): void => {
        have($skill`Just the Facts`) && !have($effect`Sweet and Red`)
          ? retrieveItem(1, $item`figurine of a cute baby seal`)
          : retrieveItem(1, $item`figurine of a wretched-looking seal`);
        have($skill`Just the Facts`) && !have($effect`Sweet and Red`)
          ? retrieveItem(5, $item`seal-blubber candle`)
          : retrieveItem(1, $item`seal-blubber candle`);
        have($skill`Just the Facts`) && !have($effect`Sweet and Red`)
          ? use(1, $item`figurine of a cute baby seal`)
          : use(1, $item`figurine of a wretched-looking seal`);
      },
      outfit: () =>
        oomfieOutfit({
          backOverride:
            !have($effect`Wolfish Form`) || !have($effect`Bat-Adjacent Form`)
              ? $item`vampyric cloake`
              : undefined,
          weaponOverride: $item`seal-clubbing club`,
          offhandOverride: !have($effect`Peppermint Rush`)
            ? $item`candy cane sword cane`
            : undefined,
        }),
      combat: new CombatStrategy().autoattack(() =>
        Macro.trySkill($skill`Sing Along`)
          .externalIf(!have($effect`Wolfish Form`), Macro.trySkill($skill`Become a Wolf`))
          .externalIf(
            have($effect`Wolfish Form`) && !have($effect`Bat-Adjacent Form`),
            Macro.trySkill($skill`Become a Bat`),
          )
          .trySkill($skill`Surprisingly Sweet Slash`)
          .trySkill($skill`Surprisingly Sweet Stab`)
          .attack()
          .repeat(),
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
        true ||
        get(`encountersUntilSRChoice`) === 0 ||
        have($item`Rufus's shadow lodestone`) ||
        get(`_fireExtinguisherCharge`) <= 10,
      do: () => shadowRiftChoice,
      outfit: () =>
        oomfieOutfit({
          weaponOverride: $item`industrial fire extinguisher`,
          modesOverride: {
            umbrella: `broken`,
          },
        }),
      combat: new CombatStrategy().autoattack(() =>
        customMacro
          .if_(
            shadowRiftPocketTarget(),
            customMacro
              .polarpocket(9 - (100 - get(`_fireExtinguisherCharge`)) / 10)
              .trySkill($skill`Perpetrate Mild Evil`),
          )
          .trySkill($skill`Sing Along`)
          .trySkill($skill`Recall Facts: %phylum Circadian Rhythms`)
          .attack()
          .repeat(),
      ),
    },
    {
      name: `Payphone Freefights (cleaver)`,
      ready: () => have($effect`Shadow Affinity`),
      completed: () =>
        get(`encountersUntilSRChoice`) === 0 || have($item`Rufus's shadow lodestone`),
      do: () => shadowRiftChoice(),
      outfit: () => oomfieOutfit({ offhandOverride: $item`candy cane sword cane` }),
      combat: new CombatStrategy().autoattack(() =>
        Macro.trySkill($skill`Sing Along`)
          .trySkill($skill`Recall Facts: %phylum Circadian Rhythms`)
          .trySkill($skill`Surprisingly Sweet Slash`)
          .trySkill($skill`Surprisingly Sweet Stab`)
          .attack()
          .repeat(),
      ),
    },
    {
      name: `Payphone Freefights (bossa)`,
      prepare: () => restoreHp(myMaxhp()),
      ready: () => get(`encountersUntilSRChoice`) === 0,
      completed: () => have($item`Rufus's shadow lodestone`) || get(`questRufus`) === `step1`,
      do: () => shadowRiftChoice(),
      outfit: () => oomfieOutfit({ familiarOverride: $familiar`Machine Elf` }),
      combat: new CombatStrategy().autoattack(
        Macro.if_(
          $monster`shadow matrix`,
          Macro.trySkill($skill`Stuffed Mortar Shell`).trySkillRepeat($skill`Saucegeyser`),
        ).trySkillRepeat($skill`Northern Explosion`),
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
      outfit: () => oomfieOutfit({ shirtOverride: $item`makeshift garbage shirt` }),
      combat: new CombatStrategy().autoattack(
        Macro.trySkill($skill`%fn, spit on me!`)
          .trySkill($skill`Sing Along`)
          .attack()
          .repeat(),
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
      combat: new CombatStrategy().autoattack(
        Macro.trySkill($skill`%fn, spit on me!`)
          .trySkill($skill`Sing Along`)
          .attack()
          .repeat(),
      ),
      outfit: () => oomfieOutfit({ shirtOverride: $item`makeshift garbage shirt` }),
    },
    {
      name: `Deep Machine Fights`,
      completed: () =>
        (args.fam && args.familiar !== $familiar`Machine Elf`) || get(`_machineTunnelsAdv`) >= 5,
      do: () => $location`The Deep Machine Tunnels`,
      outfit: {
        offhand: $item`unbreakable umbrella`,
        familiar: $familiar`Machine Elf`,
        famequip: $item`tiny stillsuit`,
        modes: { umbrella: `broken` },
      },
      combat: new CombatStrategy().autoattack(() =>
        Macro.externalIf(
          get(`lastCopyableMonster`) === $monster`Witchess Bishop`,
          Macro.trySkill($skill`Feel Nostalgic`),
        )
          .if_($monster`Perceiver of Sensations`, Macro.tryItem($item`abstraction: thought`))
          .if_($monster`Thinker of Thoughts`, Macro.tryItem($item`abstraction: action`))
          .trySkill($skill`Sing Along`)
          .attack()
          .repeat(),
      ),
    },
    {
      name: `Observe NEP Quest`,
      completed: () =>
        get(`_questPartyFairQuest`) !== `` ||
        get(`_questPartyFair`) === `` ||
        get(`_neverendingPartyFreeTurns`) >= 10,
      do: (): void => {
        visitUrl(`adventure.php?snarfblat=528`);
        runChoice(3);
      },
    },
    {
      name: `Accept/Deny NEP Quest`,
      ready: () => get(`_questPartyFair`) === `unstarted`,
      completed: () => get(`_neverendingPartyFreeTurns`) >= 10,
      do: (): void => {
        visitUrl(`adventure.php?snarfblat=528`);
        if ([`food`, `booze`].includes(get(`_questPartyFairQuest`))) runChoice(1);
        else runChoice(2);
      },
    },
    {
      name: `Neverending Free Fights`,
      prepare: () => restoreMp(50),
      completed: () => get(`_neverendingPartyFreeTurns`) >= 10,
      do: $location`The Neverending Party`,
      choices: { 1322: 2, 1324: 5, 1326: 2 },
      combat: new CombatStrategy().autoattack(() =>
        Macro.trySkill($skill`Bowl Sideways`)
          .trySkill($skill`%fn, spit on me!`)
          .externalIf(
            get(`lastCopyableMonster`) === $monster`sausage goblin`,
            Macro.trySkill($skill`Feel Nostalgic`),
          )
          .trySkill($skill`Sing Along`)
          .trySkill($skill`Recall Facts: %phylum Circadian Rhythms`)
          .trySkillRepeat($skill`Lunging Thrust-Smack`),
      ),
      outfit: () => oomfieOutfit({ shirtOverride: $item`makeshift garbage shirt` }),
    },
    {
      name: `Witchess Witch`,
      prepare: (): void => {
        restoreHp(myMaxhp());
        restoreMp(100);
      },
      completed: () => have($item`battle broom`),
      do: () => Witchess.fightPiece($monster`Witchess Witch`),
      combat: new CombatStrategy().autoattack(
        Macro.trySkill($skill`%fn, spit on me!`)
          .trySkill($skill`Sing Along`)
          .trySkillRepeat($skill`Lunging Thrust-Smack`),
      ),
      outfit: () =>
        oomfieOutfit({
          shirtOverride: $item`makeshift garbage shirt`,
        }),
    },
    {
      name: `Witchess Queen`,
      prepare: () => restoreHp(myMaxhp()),
      completed: () => have($item`very pointy crown`) || Witchess.fightsDone() >= 5,
      do: () => Witchess.fightPiece($monster`Witchess Queen`),
      combat: new CombatStrategy().autoattack(Macro.attack().repeat()),
      outfit: () => oomfieOutfit({ shirtOverride: $item`makeshift garbage shirt` }),
    },
    {
      name: `Shattering Punches`,
      prepare: () => restoreMp(50),
      completed: () => get(`_shatteringPunchUsed`) >= 3,
      do: $location`The Neverending Party`,
      choices: { 1322: 2, 1324: 5, 1326: 2 },
      outfit: () =>
        oomfieOutfit({
          shirtOverride: $item`makeshift garbage shirt`,
          weaponOverride: have($item`fish hatchet`) ? $item`fish hatchet` : $item`June cleaver`,
          acc2Override: $item`Cincho de Mayo`,
          modesOverride: {
            umbrella: `broken`,
            backupcamera: `ml`,
          },
        }),

      combat: new CombatStrategy().autoattack(
        Macro.trySkill($skill`%fn, spit on me!`)
          .trySkill($skill`Bowl Sideways`)
          .trySkill($skill`Feel Pride`)
          .trySkill($skill`Cincho: Confetti Extravaganza`)
          .trySkill($skill`Sing Along`)
          .trySkill($skill`Shattering Punch`)
          .abort(),
      ),
    },
    {
      name: `Chest X-rays`,
      completed: () => get(`_chestXRayUsed`) >= 3,
      do: $location`The Neverending Party`,
      choices: { 1322: 2, 1324: 5, 1326: 2 },
      outfit: {
        acc2: $item`Lil' Doctor™ bag`,
      },
      combat: new CombatStrategy().autoattack(
        Macro.trySkill($skill`%fn, spit on me!`)
          .trySkill($skill`Bowl Sideways`)
          .trySkill($skill`Sing Along`)
          .trySkill($skill`Chest X-Ray`)
          .abort(),
      ),
    },
    {
      name: `Mob-Hit`,
      prepare: () => restoreMp(50),
      completed: () => get(`_gingerbreadMobHitUsed`),
      do: $location`The Neverending Party`,
      choices: { 1322: 2, 1324: 5, 1326: 2 },
      combat: new CombatStrategy().autoattack(
        Macro.trySkill($skill`%fn, spit on me!`)
          .trySkill($skill`Bowl Sideways`)
          .trySkill($skill`Sing Along`)
          .trySkill($skill`Gingerbread Mob Hit`)
          .abort(),
      ),
    },
  ],
};

import { CombatStrategy, Quest, Task } from "grimoire-kolmafia";
import {
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
  print,
  restoreHp,
  retrieveItem,
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
  $monster,
  $skill,
  $slot,
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
  withChoice,
} from "libram";
import { fallGuy } from "../lib";

let curOffhand = $item`unbreakable umbrella`;
let curWeapon = $item`June cleaver`;

const levellingOutfit = {
  hat: $item`wad of used tape`,
  back: $item`Catherine Wheel`,
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

  //ML and Bonus Stats
  $effect`Carol of the Thrills`,
  $effect`Pride of the Puffin`,
  $effect`Drescher's Annoying Noise`,

  //Defensive
  $effect`Ghostly Shell`,
  $effect`Astral Shell`,
  $effect`Jalapeño Saucesphere`,
  $effect`Elemental Saucesphere`,
  $effect`Scarysauce`,

  //Elemental Weapon Damage
  $effect`Your Fifteen Minutes`,
  $effect`Frostbeard`,
  $effect`Takin' It Greasy`,
  $effect`Rotten Memories`,
  $effect`Pyromania`,
  $effect`Intimidating Mien`,

  //Familiar!
  $effect`Empathy`,
  $effect`Leash of Linguini`,
  $effect`Blood Bond`,

  //Misc
  $effect`Carol of the Bulls`,
  $effect`Carol of the Hells`,
  $effect`Singer's Faithful Ocelot`,
  $effect`Bendin' Hell`,
];

print(`${levellingEffects}`);

export const levellingQuest: Quest<Task> = {
  name: `Levelling`,
  completed: () => (get(`_gingerbreadMobHitUsed`) || myLevel() >= 15) && have($item`battle broom`),
  tasks: [
    {
      name: `Swap Sombrero`,
      ready: () =>
        have($effect`Spit Upon`) &&
        myFamiliar() !== $familiar`Hovering Sombrero` &&
        myFamiliar() !== $familiar`Machine Elf`,
      completed: () => myFamiliar() === $familiar`Hovering Sombrero`,
      do: () => useFamiliar($familiar`Hovering Sombrero`),
    },
    {
      name: `Drink Pilsners`,
      ready: () => myLevel() >= 11 && availableAmount($item`astral pilsner`) >= 4,
      prepare: () => ensureEffect($effect`Ode to Booze`, 4),
      completed: () => availableAmount($item`astral pilsner`) < 4,
      do: () => drink(4, $item`astral pilsner`),
      post: () => uneffect($effect`Ode to Booze`),
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
      do: () => restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp())),
    },
    {
      name: `Kramco Goblingo`,
      prepare: (): void => {
        curOffhand = equippedItem($slot`off-hand`);
      },
      ready: () => getKramcoWandererChance() === 1,
      completed: () => getKramcoWandererChance() < 1,
      do: () => $location`The Sleazy Back Alley`,
      outfit: {
        offhand: $item`Kramco Sausage-o-Matic™`,
      },
      combat: new CombatStrategy().macro(Macro.attack().repeat()),
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
      completed: () => get(`pizzaOfLegendEaten`) && get(`calzoneOfLegendEaten`),
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
      completed: () => have($item`Catherine Wheel`),
      do: () => retrieveItem(1, $item`Catherine Wheel`),
      post: () => equip($item`Catherine Wheel`),
    },
    {
      name: `Wish for A Contender`,
      completed: () => have($effect`A Contender`) || get(`_genieWishesUsed`) >= 2,
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
        [
          $effect`Glittering Eyelashes`,
          $effect`Go Get 'Em\, Tiger!`,
          $effect`Butt-Rock Hair`,
        ].every((ef) => have(ef)),
      do: () =>
        [
          $effect`Glittering Eyelashes`,
          $effect`Go Get 'Em\, Tiger!`,
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
      },
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Gulp Latte`)
          .trySkill($skill`Throw Latte on Opponent`)
          .abort()
      ),
    },
    {
      name: `Buff the heck up oomfie!`,
      completed: () => have($effect`Bendin' Hell`),
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
        offhand: $item`latte lovers member's mug`,
      },
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Gulp Latte`)
          .trySkill($skill`Throw Latte on Opponent`)
          .abort()
      ),
      post: () => equip($item`unbreakable umbrella`),
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
        familiar: $familiar`Nanorhino`,
        famequip: $item`tiny stillsuit`,
      },
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Feel Nostalgic`)
          .trySkill($skill`Feel Envy`)
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
      combat: new CombatStrategy().macro(Macro.attack().repeat()),
    },
    {
      name: `Seal Fights`,
      prepare: () => retrieveItem(1, $item`seal-clubbing club`),
      completed: () => myClass() !== Class.get(`Seal Clubber`) || get(`_sealsSummoned`) >= 5,
      do: (): void => {
        retrieveItem(1, $item`figurine of an ancient seal`);
        retrieveItem(3, $item`seal-blubber candle`);
        use(1, $item`figurine of an ancient seal`);
      },
      outfit: {
        weapon: $item`seal-clubbing club`,
      },
      combat: new CombatStrategy().macro(Macro.attack().repeat()),
    },
    {
      name: `Get Payphone Quest`,
      completed: () => get(`_shadowAffinityToday`),
      do: () => withChoice(1497, 1, () => use(1, $item`closed-circuit phone system`)),
    },
    {
      name: `Payphone Freefights (extingo)`,
      prepare: () => retrieveItem(1, $item`porkpie-mounted popper`),
      completed: () =>
        get(`encountersUntilSRChoice`) === 0 ||
        have($item`Rufus's shadow lodestone`) ||
        get(`_fireExtinguisherCharge`) <= 10,
      do: $location`Shadow Rift (The Misspelled Cemetary)`,
      outfit: {
        hat: $item`porkpie-mounted popper`,
        weapon: $item`industrial fire extinguisher`,
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
          .attack()
          .repeat()
      ),
    },
    {
      name: `Payphone Freefights (cleaver)`,
      completed: () =>
        get(`encountersUntilSRChoice`) === 0 || have($item`Rufus's shadow lodestone`),
      do: $location`Shadow Rift (The Misspelled Cemetary)`,
      outfit: {
        weapon: $item`June cleaver`,
      },
      combat: new CombatStrategy().macro(Macro.attack().repeat()),
    },
    {
      name: `Payphone Freefights (bossa)`,
      ready: () => get(`encountersUntilSRChoice`) === 0,
      completed: () => have($item`Rufus's shadow lodestone`),
      do: $location`Shadow Rift (The Misspelled Cemetary)`,
      outfit: {
        weapon: $item`June cleaver`,
        familiar: $familiar`Machine Elf`,
        famequip: $item`tiny stillsuit`,
      },
      combat: new CombatStrategy().macro(
        Macro.if_(
          $monster`shadow matrix`,
          Macro.trySkill($skill`Stuffed Mortar Shell`)
            .trySkill($skill`Saucegeyser`)
            .repeat()
        )
          .trySkill($skill`Northern Explosion`)
          .repeat()
      ),
      post: () => fallGuy($location`Shadow Rift`),
    },
    {
      name: `Snojo Fights`,
      prepare: (): void => {
        visitUrl(`place.php?whichplace=snojo&action=snojo_controller`);
        visitUrl(`choice.php?pwd=${myHash()}&whichchoice=1118&option=3`);
        cliExecute(`fold garbage shirt`);
      },
      completed: () => get(`_snojoFreeFights`) >= 10,
      do: $location`The X-32-F Combat Training Snowman`,
      outfit: {
        shirt: $item`makeshift garbage shirt`,
        familiar: $familiar`Melodramedary`,
        famequip: $item`tiny stillsuit`,
      },
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`%fn\, spit on me!`)
          .attack()
          .repeat()
      ),
      post: () => visitUrl(`clan_viplounge.php?action=hottub`),
    },
    {
      name: `Witchess Fights`,
      completed: () => get(`_witchessFights`) >= 4,
      do: () => Witchess.fightPiece($monster`Witchess Bishop`),
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`%fn, spit on me!`)
          .attack()
          .repeat()
      ),
    },
    {
      name: `Deep Machine Fights`,
      completed: () => get(`_machineTunnelsAdv`) >= 5,
      do: () => $location`The Deep Machine Tunnels`,
      outfit: {
        familiar: $familiar`Machine Elf`,
        famequip: $item`tiny stillsuit`,
      },
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`%fn\, spit on me!`)
          .attack()
          .repeat()
      ),
    },
    {
      name: `Neverending Free Fights`,
      completed: () => get(`_neverendingPartyFreeTurns`) >= 10,
      do: $location`The Neverending Party`,
      choices: { 1322: 2, 1324: 5, 1326: 2 },
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Bowl Sideways`)
          .trySkill($skill`%fn\, spit on me!`)
          .trySkill($skill`Lunging Thrust-Smack`)
          .repeat()
      ),
    },
    {
      name: `Witchess Witch`,
      prepare: () => restoreHp(myMaxhp()),
      completed: () => have($item`battle broom`),
      do: () => Witchess.fightPiece($monster`Witchess Witch`),
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`%fn\, spit on me!`)
          .trySkill($skill`Lunging Thrust-Smack`)
          .repeat()
      ),
    },
    {
      name: `Shattering Punches`,
      completed: () => get(`_shatteringPunchUsed`) >= 3,
      do: $location`The Neverending Party`,
      choices: { 1322: 2, 1324: 5, 1326: 2 },
      outfit: {
        acc2: $item`Cincho de Mayo`,
      },
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`%fn\, spit on me!`)
          .trySkill($skill`Bowl Sideways`)
          .trySkill($skill`Feel Pride`)
          .trySkill($skill`Cincho: Confetti Extravaganza`)
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
        acc2: $item`Lil' Doctor™ bag`,
      },
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`%fn\, spit on me!`)
          .trySkill($skill`Bowl Sideways`)
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
        Macro.trySkill($skill`%fn\, spit on me!`)
          .trySkill($skill`Bowl Sideways`)
          .trySkill($skill`Gingerbread Mob Hit`)
          .abort()
      ),
    },
  ],
};

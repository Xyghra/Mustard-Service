import { CombatStrategy, Quest, Task } from "grimoire-kolmafia";
import {
  abort,
  adv1,
  autosell,
  canAdventure,
  cliExecute,
  drink,
  equip,
  equippedItem,
  myAdventures,
  retrieveItem,
  use,
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
  CombatLoversLocket,
  CommunityService,
  ensureEffect,
  get,
  getKramcoWandererChance,
  have,
  Macro,
  set,
  uneffect,
} from "libram";

const { guildZone, guildQuestPref } = byStat({
  Muscle: {
    guildZone: $location`The Outskirts of Cobb's Knob`,
    guildQuestPref: `questG09Muscle`,
  },
  Mysticality: {
    guildZone: $location`The Haunted Pantry`,
    guildQuestPref: `questG07Myst`,
  },
  Moxie: {
    guildZone: $location`The Sleazy Back Alley`,
    guildQuestPref: `questG08Moxie`,
  },
});

let curWeapon = $item`June cleaver`;

export const skeletonsQuest: Quest<Task> = {
  name: `Skeletons to Wire Coiling`,
  completed: () => CommunityService.CoilWire.isDone(),
  tasks: [
    {
      name: `Open Zones`,
      completed: () => get(`_mustardServiceDiner`) === `true`,
      do: (): void => {
        adv1($location`Uncle Gator's Country Fun-Time Liquid Waste Sluice`, -1, `abort;`);
        set(`_mustardServiceDiner`, `true`);
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
      name: `Fold the able`,
      completed: () =>
        (have($item`wad of used tape`) &&
          get(`parkaMode`) === `kachungasaur` &&
          get(`backupCameraMode`) === `init`) ||
        getKramcoWandererChance() < 1,
      do: () =>
        cliExecute(`fold wad of used tape; parka kachungasaur; umbrella dr; backupcamera init`),
    },
    {
      name: `Pre-Coil Kramco`,
      completed: () => getKramcoWandererChance() < 1,
      do: (): void => {
        adv1(guildZone, -1, `attack; repeat;`);
      },
      post: (): void => {
        if (have($effect`Beaten Up`) && !have($item`magical sausage casing`)) {
          abort(`Died on first sosig attempt?`);
        }
      },
      outfit: {
        hat: $item`wad of used tape`,
        shirt: $item`Jurassic Parka`,
        weapon: $item`June cleaver`,
        offhand: $item`Kramco Sausage-o-Matic™`,
        pants: $item`designer sweatpants`,
        acc1: $item`backup camera`,
        acc2: $item`your cowboy boots`,
        acc3: $item`combat lover's locket`,
        familiar: $familiar`Melodramedary`,
        famequip: $item`tiny stillsuit`,
      },
    },
    {
      name: `Red Skeleton`,
      prepare: () => retrieveItem(1, $item`red rocket`),
      completed: () =>
        get(`lastCopyableMonster`) === $monster`red skeleton` ||
        get(`_locketMonstersFought`).includes(`1521`),
      do: (): void => {
        CombatLoversLocket.reminisce($monster`red skeleton`);
      },
      combat: new CombatStrategy().macro(Macro.trySkill($skill`Feel Hatred`).abort()),
      post: () => cliExecute(`umbrella ml; backupcamera ml; parka dilophosaur`),
    },
    {
      name: `Novelty Tropical Skeleton`,
      ready: () =>
        get(`lastCopyableMonster`) === $monster`red skeleton` && get(`parkaMode`) === `dilophosaur`,
      completed: () => have($effect`Everything Looks Yellow`) && have($item`cherry`),
      do: (): void => {
        Cartography.mapMonster($location`The Skeleton Store`, $monster`novelty tropical skeleton`);
      },
      combat: new CombatStrategy().macro(
        Macro.tryItem($item`red rocket`)
          .trySkill($skill`Feel Nostalgic`)
          .trySkill($skill`Spit jurassic acid`)
          .abort()
      ),
      outfit: {
        shirt: $item`Jurassic Parka`,
      },
      post: () => cliExecute(`parka ml`),
    },
    {
      name: `Red May Day`,
      completed: () => [$item`red box`, $item`MayDay™ supply package`].every((i) => !have(i)),
      do: (): void => {
        [$item`red box`, $item`MayDay™ supply package`].forEach((i) => use(1, i));
        if (have($item`space blanket`)) {
          autosell(1, $item`space blanket`);
        }
      },
    },
    {
      name: `Guild Unlock`,
      prepare: () =>
        [
          $effect`Musk of the Moose`,
          $effect`Carlweather's Cantata of Confrontation`,
          $effect`Empathy`,
          $effect`Blood Bond`,
        ].forEach((ef) => ensureEffect(ef)),
      completed: () => get(guildQuestPref) === `step1` || get(guildQuestPref) === `finished`,
      do: guildZone,
      outfit: {
        familiar: $familiar`Pair of Stomping Boots`,
        famequip: $item`tiny stillsuit`,
      },
      combat: new CombatStrategy().macro(Macro.runaway().abort()),
    },
    {
      name: `Cemetary Unlock`,
      completed: () => canAdventure($location`The Unquiet Garves`),
      do: (): void => {
        visitUrl(`guild.php?guild=f`);
        visitUrl(`guild.php?place=challenge`);
        visitUrl(`guild.php?place=scg`);
        visitUrl(`guild.php?place=scg`);
      },
    },
    {
      name: `Numberology Attempt DEUX`,
      completed: () => get(`_universeCalculated`) > 0,
      do: () => cliExecute(`numberology 69`),
    },
    {
      name: `Guarantee 61+ adventures`,
      completed: () => myAdventures() >= 61,
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

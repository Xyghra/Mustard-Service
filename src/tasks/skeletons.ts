import { CombatStrategy, Quest, Task } from "grimoire-kolmafia";
import {
  abort,
  adv1,
  autosell,
  canAdventure,
  cliExecute,
  drink,
  myAdventures,
  myMaxhp,
  restoreHp,
  retrieveItem,
  reverseNumberology,
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
  Cartography,
  CombatLoversLocket,
  CommunityService,
  ensureEffect,
  get,
  getKramcoWandererChance,
  have,
  Macro,
  uneffect,
} from "libram";
import { args, guildQuest, guildZone, loss, oomfieOutfit } from "../lib";

export const skeletonsQuest: Quest<Task> = {
  name: `Skeletons to Wire Coiling`,
  completed: () => CommunityService.CoilWire.isDone(),
  tasks: [
    loss,
    {
      name: `June Cleave`,
      ready: () => get(`_juneCleaverFightsLeft`) === 0,
      completed: () => get(`_juneCleaverFightsLeft`) > 0,
      do: () => adv1($location`The Sleazy Back Alley`, -1, "abort;"),
      outfit: {
        weapon: $item`June cleaver`,
      },
      post: (): void => {
        if (have($effect`Beaten Up`)) {
          uneffect($effect`Beaten Up`);
        }
      },
    },
    {
      name: `Pre-Coil Kramco`,
      completed: () => getKramcoWandererChance() < 1,
      do: () => guildZone,
      post: (): void => {
        if (have($effect`Beaten Up`) && !have($item`magical sausage casing`)) {
          abort(`Died on first sosig attempt?`);
        }
      },
      outfit: () =>
        oomfieOutfit({
          offhandOverride: $item`Kramco Sausage-o-Matic™`,
          modesOverride: {
            parka: `kachungasaur`,
            backupcamera: `init`,
          },
        }),
      combat: new CombatStrategy().macro(Macro.attack().repeat()),
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
    },
    {
      name: `Novelty Tropical Skeleton`,
      ready: () => get(`lastCopyableMonster`) === $monster`red skeleton`,
      prepare: () => restoreHp(myMaxhp()),
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
        offhand: $item`latte lovers member's mug`,
        shirt: $item`Jurassic Parka`,
        acc1: $item`backup camera`,
        modes: {
          parka: `dilophosaur`,
          backupcamera: `ml`,
        },
      },
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
      name: `Purchase Fireworks Hat`,
      completed: () => have($item`sombrero-mounted sparkler`),
      do: () => retrieveItem(1, $item`sombrero-mounted sparkler`),
    },
    {
      name: `Guild Unlock`,
      completed: () => get(guildQuest) === `step1` || get(guildQuest) === `finished` || args.fam,
      do: guildZone,
      outfit: {
        offhand: $item`latte lovers member's mug`,
        hat: $item`sombrero-mounted sparkler`,
        familiar: $familiar`Pair of Stomping Boots`,
        famequip: $item`tiny stillsuit`,
        modes: {
          parka: `spikolodon`,
        },
      },
      combat: new CombatStrategy().macro(Macro.runaway().abort()),
      effects: [
        $effect`Musk of the Moose`,
        $effect`Carlweather's Cantata of Confrontation`,
        $effect`Empathy`,
        $effect`Blood Bond`,
      ],
    },
    {
      name: `Guild Unlock (100% Familiar)`,
      completed: () => get(guildQuest) === `step1` || get(guildQuest) === `finished`,
      do: () => guildZone,
      effects: [$effect`Musk of the Moose`, $effect`Carlweather's Cantata of Confrontation`],
      outfit: () => ({
        offhand: $item`latte lovers member's mug`,
        hat: $item`sombrero-mounted sparkler`,
        acc1: get(`_reflexHammerUsed`) >= 3 ? $item`backup camera` : $item`Lil' Doctor™ bag`,
        familiar: args.familiar,
        famequip: $item`tiny stillsuit`,
      }),
      combat: new CombatStrategy().macro(() =>
        Macro.externalIf(get(`_reflexHammerUsed`) < 3, Macro.trySkill($skill`Reflex Hammer`))
          .trySkill($skill`Feel Hatred`)
          .abort()
      ),
    },
    {
      name: `Cemetery Unlock`,
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
      completed: () =>
        get(`_universeCalculated`) > 0 || !Object.keys(reverseNumberology()).includes(`69`),
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

import { Quest, Task } from "grimoire-kolmafia";
import { cliExecute, myAscensions, nowToInt, print } from "kolmafia";
import { $effect, CommunityService, get, have, set, uneffect } from "libram";

export const finaleQuest: Quest<Task> = {
  name: `Finale!`,
  tasks: [
    {
      name: `Donate!`,
      completed: () => get(`kingLiberated`),
      do: () => CommunityService.donate(),
      limit: { tries: 1 },
    },
    {
      name: `Printing Details!`,
      completed: () => get(`_mustardServiceTime`) === "",
      do: (): void => {
        const currentTime = nowToInt();
        const baseString = get(`csServicesPerformed`)
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

        print(`(none): [${get(`_mustardServiceTests`).split(`,`)[0]}]`, `blue`);
        for (let i = 1; i <= 10; i++) {
          const testName = baseString.split(`,`)[i];
          const testDetails = get(`_mustardServiceTests`).split(`,`)[i];
          print(`${testName}[${testDetails}]`);
        }

        print(
          `Took: ${Math.floor(
            (currentTime - Number(get(`_mustardServiceTime`))) / 60000
          )} Minute(s), ${Math.floor(
            ((currentTime - Number(get(`_mustardServiceTime`))) % 60000) / 1000
          )} Second(s)`,
          `green`
        );

        set(`_mustardServiceTime`, ``);
      },
    },
    {
      name: `Empty Storage`,
      completed: () => get(`lastEmptiedStorage`) === myAscensions(),
      do: () => cliExecute(`hagnk all`),
      limit: { tries: 1 },
    },
    {
      name: `Lose Loss`,
      completed: () => !have($effect`Feeling Lost`),
      do: () => uneffect($effect`Feeling Lost`),
    },
    {
      name: `Prismbreak Moment`,
      completed: () => get(`_smithsnessSummons`) === 3,
      do: () => cliExecute(`gwa prismbreak; gwa breakfast`),
    },
  ],
};

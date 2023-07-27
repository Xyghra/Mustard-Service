import { Quest, Task } from "grimoire-kolmafia";
import { cliExecute, myAscensions, myName, nowToInt, print } from "kolmafia";
import { $effect, CommunityService, get, have, set, uneffect } from "libram";
import { printLoggedTests } from "../lib";

export const finaleQuest: Quest<Task> = {
  name: `Finale!`,
  tasks: [
    {
      name: `Donate!`,
      completed: () => get(`kingLiberated`),
      do: () => CommunityService.donate(),
      limit: { tries: 1 },
    },
  ],
};

export const postFinaleQuest: Quest<Task> = {
  name: `Post-Finale!`,
  tasks: [
    {
      name: `Printing Details!`,
      completed: () => get(`_mustardServiceTime`) === "",
      do: (): void => {
        const currentTime = nowToInt();
        printLoggedTests();

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
      completed: () => myName() !== `Moon Moon` || get(`_gwa_breakfast`, false),
      do: () => cliExecute(`gwa prism; gwa breakfast`),
    },
  ],
};

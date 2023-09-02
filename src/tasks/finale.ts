import { Quest, Task } from "grimoire-kolmafia";
import { cliExecute, nowToInt, print } from "kolmafia";
import { CommunityService, get, set } from "libram";
import { printLoggedTests } from "../lib";

export const finaleQuest: Quest<Task> = {
  name: `Finale!`,
  tasks: [
    {
      name: `Donate!`,
      completed: () => get(`kingLiberated`),
      do: () => CommunityService.donate(),
      limit: { tries: 1 },
      post: () => cliExecute(`${get(`kingLiberatedScript`)}`),
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
  ],
};

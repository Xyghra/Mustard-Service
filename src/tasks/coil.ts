import { Quest, Task } from "grimoire-kolmafia";
import { CommunityService } from "libram";
import { logTest } from "../lib";

export const CoilQuest: Quest<Task> = {
  name: `Coil Wire`,
  completed: () => CommunityService.CoilWire.isDone(),
  tasks: [
    {
      name: `Coil that wire!`,
      completed: () => CommunityService.CoilWire.isDone(),
      do: () => CommunityService.CoilWire.run(() => logTest(CommunityService.CoilWire, 60, 60), 60),
      limit: { tries: 1 },
    },
  ],
};

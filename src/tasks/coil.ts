import { Quest, Task } from "grimoire-kolmafia";
import { CommunityService, set } from "libram";

export const CoilQuest: Quest<Task> = {
  name: `Coil Wire`,
  completed: () => CommunityService.CoilWire.isDone(),
  tasks: [
    {
      name: `Coil that wire!`,
      completed: () => CommunityService.CoilWire.isDone(),
      do: () => CommunityService.CoilWire.run(() => set(`_mustardServiceTests`, `60`), 60),
      limit: { tries: 1 },
    },
  ],
};

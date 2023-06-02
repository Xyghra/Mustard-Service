import { Engine, getTasks, Task } from "grimoire-kolmafia";
import { runStartQuest } from "./tasks/preSkeletons";
import { skeletonsQuest } from "./tasks/skeletons";
import { CoilQuest } from "./tasks/coil";
import { levellingQuest } from "./tasks/levelling";
import { hpQuest, moxQuest, muscleQuest, mystQuest } from "./tasks/stats";
import { hotresQuest } from "./tasks/hotres";
import { wdmgQuest } from "./tasks/wdmg";
import { sdmgQuest } from "./tasks/sdmg";
import { famwtQuest } from "./tasks/famwt";
import { noncombatQuest } from "./tasks/noncombat";
import { boozeQuest } from "./tasks/booze";
import { finaleQuest } from "./tasks/finale";
import { get } from "libram";
import { setAutoAttack } from "kolmafia";

export function main(): void {
  const tasks: Task[] = getTasks([
    runStartQuest,
    skeletonsQuest,
    CoilQuest,
    levellingQuest,
    muscleQuest,
    mystQuest,
    moxQuest,
    hotresQuest,
    wdmgQuest,
    sdmgQuest,
    hpQuest,
    famwtQuest,
    noncombatQuest,
    boozeQuest,
    finaleQuest,
  ]);
  const engine = new Engine(tasks);
  setAutoAttack(0);

  while (!finished()) {
    const task = engine.getNextTask();
    if (task === undefined) throw "Unable to find available task, but the run is not complete";
    engine.execute(task);
  }
}

function finished(): boolean {
  return get(`kingLiberated`) && get(`_smithsnessSummons`) === 3;
}

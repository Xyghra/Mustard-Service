import { Args, Engine, Task, getTasks } from "grimoire-kolmafia";
import { abort, myFamiliar, setAutoAttack } from "kolmafia";
import { $familiar, get } from "libram";
import { args } from "./lib";
import { boozeQuest } from "./tasks/booze";
import { CoilQuest } from "./tasks/coil";
import { famwtQuest } from "./tasks/famwt";
import { finaleQuest, postFinaleQuest } from "./tasks/finale";
import { hotresQuest } from "./tasks/hotres";
import { levellingQuest } from "./tasks/levelling";
import { noncombatQuest } from "./tasks/noncombat";
import { prequelQuest } from "./tasks/runStart";
import { sdmgQuest } from "./tasks/sdmg";
import { hpQuest, moxQuest, muscleQuest, mystQuest } from "./tasks/stats";
import { wdmgQuest } from "./tasks/wdmg";

export function main(argument = ``): void {
  Args.fill(args, argument);

  if (args.help || argument === ``) {
    Args.showHelp(args);
    return;
  }

  if (args.fam) {
    if (myFamiliar() === $familiar.none) {
      abort(`Please choose a familiar before running a 100% run`);
    } else {
      args.familiar = myFamiliar();
    }
  }

  if (args.run) {
    const tasks: Task[] = getTasks([
      prequelQuest,
      CoilQuest,
      levellingQuest,
      muscleQuest,
      mystQuest,
      moxQuest,
      hotresQuest,
      hpQuest,
      wdmgQuest,
      sdmgQuest,
      famwtQuest,
      noncombatQuest,
      boozeQuest,
      finaleQuest,
    ]);

    const engine = new Engine(tasks);
    setAutoAttack(0);

    while (!get(`kingLiberated`, false)) {
      const task = engine.getNextTask();
      if (task === undefined) throw "Unable to find available task, but the run is not complete";
      engine.execute(task);
    }

    if (get(`kingLiberated`, false)) {
      new Engine(getTasks([postFinaleQuest])).run();
    }
  }
}

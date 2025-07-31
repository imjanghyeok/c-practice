import readline from 'readline';
import { Mit } from "./Mit.js";
import { GitLog } from "./GitLog.js";
import {Git} from "./Git.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


function main() {
    const git = new Git();
    git.clone();
}

function GitLogCommand(command) {
    switch (command) {
        case "init":
            GitLog.init_log();
            break;
        case "add":
            GitLog.add_log();
            break;
        case "status":
            GitLog.status();
            break;
        case "commit":
            GitLog.commit_log();
            break;
        case "log":
            GitLog.log_log();
            break;
        case "branch":
            GitLog.branch_log();
            break;
        case "switch":
            GitLog.switch_log();
            break;
        case "objects":
            GitLog.objects_log();
            break;
        case "object":
            GitLog.object_log();
            break;
        case "tree":
            GitLog.tree_log();
            break;
        default:
            console.error("존재하지 않는 명령입니다.")
            break;
    }
}

main()
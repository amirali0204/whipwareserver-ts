"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ActionInvoker {
    /**
     * Initialize commands.
     */
    setAction(command) {
        this.Action = command;
    }
    doInvokeAction() {
        if (this.isCommand(this.Action)) {
            this.Action.execute();
        }
    }
    isCommand(object) {
        return object.execute !== undefined;
    }
}
exports.ActionInvoker = ActionInvoker;
//# sourceMappingURL=ActionInvoker.js.map
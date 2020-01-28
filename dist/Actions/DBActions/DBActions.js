"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DBActions {
    constructor(action) {
        this.SysAction = action;
    }
    execute() {
        console.log(`SimpleCommand: See, I can do simple things like printing (${this.SysAction})`);
    }
    sysAction() {
        return this.SysAction;
    }
}
exports.DBActions = DBActions;
//# sourceMappingURL=DBActions.js.map
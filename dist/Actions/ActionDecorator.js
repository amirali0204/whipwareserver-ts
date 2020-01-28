"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ActionDecorator {
    constructor(action) {
        this.Action = action;
    }
    /**
     * The Decorator delegates all work to the wrapped component.
     */
    execute() {
        return this.Action.execute();
    }
    sysAction() {
        return this.Action.sysAction();
    }
}
exports.ActionDecorator = ActionDecorator;
//# sourceMappingURL=ActionDecorator.js.map
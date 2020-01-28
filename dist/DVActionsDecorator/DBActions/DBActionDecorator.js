"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ActionDecorator_1 = require("../ActionDecorator");
class DBActionDecorator extends ActionDecorator_1.ActionDecorator {
    /**
     * Decorators may call parent implementation of the operation, instead of
     * calling the wrapped object directly. This approach simplifies extension
     * of decorator classes.
     */
    execute() {
        // decorate the Action here and then execute the parent
        //    if (super.sysAction() === "") {
        // fetch the action from DB
        //    }
        return super.execute();
    }
}
exports.DBActionDecorator = DBActionDecorator;
//# sourceMappingURL=DBActionDecorator.js.map
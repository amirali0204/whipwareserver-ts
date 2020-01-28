"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ActionDecorator_1 = require("../ActionDecorator");
class DBActionFilterDecorator extends ActionDecorator_1.ActionDecorator {
    /**
     * Decorators may call parent implementation of the operation, instead of
     * calling the wrapped object directly. This approach simplifies extension
     * of decorator classes.
     */
    execute() {
        // decorate the Action here and then execute the parent
        if (super.sysAction() === "") {
            // fetch the filters and attach to the action from DB
        }
        return super.execute();
    }
}
exports.DBActionFilterDecorator = DBActionFilterDecorator;
//# sourceMappingURL=DBActionFilterDecorator.js.map
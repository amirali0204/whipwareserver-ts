"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ActionDecorator_1 = require("../ActionDecorator");
class DBActionFilterDecorator extends ActionDecorator_1.ActionDecorator {
    execute() {
        // decorate the Action here and then execute the parent
        // if (super.sysAction() === "") {
        // fetch the filters and attach to the action from DB
        // }
        return super.execute();
    }
}
exports.DBActionFilterDecorator = DBActionFilterDecorator;
//# sourceMappingURL=DBActionFilterDecorator.js.map
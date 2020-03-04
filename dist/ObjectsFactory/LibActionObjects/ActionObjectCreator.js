"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ObjectCreator_1 = require("../ObjectCreator");
const ActionObjects_1 = require("./ActionObjects");
class ActionObjectCreator extends ObjectCreator_1.ObjectCreator {
    constructor(objectid) {
        super();
        this.ID = objectid;
    }
    factoryMethod() {
        return new ActionObjects_1.ActionObject(this.ID);
    }
}
exports.ActionObjectCreator = ActionObjectCreator;
//# sourceMappingURL=ActionObjectCreator.js.map
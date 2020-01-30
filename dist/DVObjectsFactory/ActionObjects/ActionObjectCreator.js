"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DVObjectCreator_1 = require("../DVObjectCreator");
const ActionObjects_1 = require("./ActionObjects");
class ActionObjectCreator extends DVObjectCreator_1.DVObjectCreator {
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
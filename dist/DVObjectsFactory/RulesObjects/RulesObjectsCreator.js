"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DVObjectCreator_1 = require("../DVObjectCreator");
const RulesObject_1 = require("./RulesObject");
class RulesObjectCreator extends DVObjectCreator_1.DVObjectCreator {
    constructor(objectid) {
        super();
        this.ID = objectid;
    }
    factoryMethod() {
        return new RulesObject_1.RulesObject(this.ID);
    }
}
exports.RulesObjectCreator = RulesObjectCreator;
//# sourceMappingURL=RulesObjectsCreator.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ObjectCreator_1 = require("../ObjectCreator");
const RulesObject_1 = require("./RulesObject");
class RulesObjectCreator extends ObjectCreator_1.ObjectCreator {
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
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DefaultRules_1 = require("./DefaultRules");
class RulesObject {
    constructor(ID) {
        this.RuleID = ID;
    }
    createObject() {
        return DefaultRules_1.DVRules[this.RuleID];
    }
}
exports.RulesObject = RulesObject;
//# sourceMappingURL=RulesObject.js.map
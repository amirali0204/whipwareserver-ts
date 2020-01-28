"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RulesObject {
    constructor(ID) {
        this.objectID = ID;
    }
    createObject() {
        console.log("Load DB object from DB");
        console.log("if it is templated object then return from file");
        console.log("return the Rules object instead of DB");
        return new Object();
    }
}
exports.RulesObject = RulesObject;
//# sourceMappingURL=RulesObject.js.map
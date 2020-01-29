"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ActionObjectTemplates_1 = require("./ActionObjectTemplates");
class DBObject {
    constructor(ID) {
        this.objectID = ID;
    }
    createObject() {
        return ActionObjectTemplates_1.DVActionObjects[this.objectID];
    }
}
exports.DBObject = DBObject;
//# sourceMappingURL=ActionObjects.js.map
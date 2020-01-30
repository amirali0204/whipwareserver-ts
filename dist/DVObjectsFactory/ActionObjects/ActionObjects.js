"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ActionObjectTemplates_1 = require("./ActionObjectTemplates");
class ActionObject {
    constructor(ID) {
        this.objectID = ID;
    }
    createObject() {
        return ActionObjectTemplates_1.DVActionObjects[this.objectID];
    }
}
exports.ActionObject = ActionObject;
//# sourceMappingURL=ActionObjects.js.map
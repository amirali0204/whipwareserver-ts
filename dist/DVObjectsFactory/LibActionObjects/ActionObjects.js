"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LibActionObjectTemplates_1 = require("./LibActionObjectTemplates");
class ActionObject {
    constructor(ID) {
        this.objectID = ID;
    }
    createObject() {
        return LibActionObjectTemplates_1.DVActionObjects[this.objectID];
    }
}
exports.ActionObject = ActionObject;
//# sourceMappingURL=ActionObjects.js.map
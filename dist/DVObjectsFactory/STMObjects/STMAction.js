"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Templates_1 = require("./Templates");
class STMAction {
    constructor(ID) {
        this.objectID = ID;
    }
    createObject() {
        // STM objects will be loaded from Template files or DB
        return Templates_1.DVStateActions[this.objectID];
    }
}
exports.STMAction = STMAction;
//# sourceMappingURL=STMAction.js.map
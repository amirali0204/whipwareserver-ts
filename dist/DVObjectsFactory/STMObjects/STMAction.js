"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class STMAction {
    constructor(ID) {
        this.objectID = ID;
    }
    createObject() {
        // STM objects will be loaded from Template files or DB
        return new Object(); // DVStateActions[this.objectID];
    }
}
exports.STMAction = STMAction;
//# sourceMappingURL=STMAction.js.map
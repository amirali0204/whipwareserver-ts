"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Templates_1 = require("./Templates/");
class STMObject {
    constructor(ID) {
        this.MachineID = ID;
    }
    createObject() {
        // STM objects will be loaded from Template files or DB
        return Templates_1.DVStateMachines[this.MachineID];
    }
}
exports.STMObject = STMObject;
//# sourceMappingURL=STMObject.js.map
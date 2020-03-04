"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ObjectCreator_1 = require("../ObjectCreator");
const STMAction_1 = require("./STMAction");
class STMActionCreator extends ObjectCreator_1.ObjectCreator {
    constructor(objectid) {
        super();
        this.ID = objectid;
    }
    factoryMethod() {
        return new STMAction_1.STMAction(this.ID);
    }
}
exports.STMActionCreator = STMActionCreator;
//# sourceMappingURL=STMActionCreator.js.map
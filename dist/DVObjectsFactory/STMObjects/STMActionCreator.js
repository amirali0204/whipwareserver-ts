"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DVObjectCreator_1 = require("../DVObjectCreator");
const STMAction_1 = require("./STMAction");
class STMActionCreator extends DVObjectCreator_1.DVObjectCreator {
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
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ObjectCreator_1 = require("../ObjectCreator");
const STMObject_1 = require("./STMObject");
class STMObjectCreator extends ObjectCreator_1.ObjectCreator {
    constructor(objectid) {
        super();
        this.ID = objectid;
    }
    factoryMethod() {
        return new STMObject_1.STMObject(this.ID);
    }
}
exports.STMObjectCreator = STMObjectCreator;
//# sourceMappingURL=STMObjectCreator.js.map
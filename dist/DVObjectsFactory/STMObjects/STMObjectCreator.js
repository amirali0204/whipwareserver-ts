"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DVObjectCreator_1 = require("../DVObjectCreator");
const STMObject_1 = require("./STMObject");
class STMObjectCreator extends DVObjectCreator_1.DVObjectCreator {
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
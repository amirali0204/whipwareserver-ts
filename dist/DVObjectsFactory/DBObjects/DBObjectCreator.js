"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DVObjectCreator_1 = require("../DVObjectCreator");
const DBObject_1 = require("./DBObject");
class DBObjectCreator extends DVObjectCreator_1.DVObjectCreator {
    constructor(objectid) {
        super();
        this.ID = objectid;
    }
    factoryMethod() {
        return new DBObject_1.DBObject(this.ID);
    }
}
exports.DBObjectCreator = DBObjectCreator;
//# sourceMappingURL=DBObjectCreator.js.map
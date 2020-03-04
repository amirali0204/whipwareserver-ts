"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ObjectCreator_1 = require("../ObjectCreator");
const DBObject_1 = require("./DBObject");
class DBObjectCreator extends ObjectCreator_1.ObjectCreator {
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
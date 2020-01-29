"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DVObjectCreator_1 = require("../DVObjectCreator");
const DBObjectQueries_1 = require("./DBObjectQueries");
class DBObjectQueriesCreator extends DVObjectCreator_1.DVObjectCreator {
    constructor(objectid) {
        super();
        this.ID = objectid;
    }
    factoryMethod() {
        return new DBObjectQueries_1.DBObjectQueries(this.ID);
    }
}
exports.DBObjectQueriesCreator = DBObjectQueriesCreator;
//# sourceMappingURL=DBObjectQueriesCreator.js.map
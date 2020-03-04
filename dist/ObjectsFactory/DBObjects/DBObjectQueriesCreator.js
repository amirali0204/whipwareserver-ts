"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ObjectCreator_1 = require("../ObjectCreator");
const DBObjectQueries_1 = require("./DBObjectQueries");
class DBObjectQueriesCreator extends ObjectCreator_1.ObjectCreator {
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
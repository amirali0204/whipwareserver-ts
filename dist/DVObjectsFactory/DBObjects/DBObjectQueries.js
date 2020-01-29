"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TemplateSchema_1 = require("./TemplateSchema");
class DBObjectQueries {
    constructor(ID) {
        this.objectID = ID;
    }
    createObject() {
        // STM objects will be loaded from Template files or DB
        return TemplateSchema_1.DVObjectQueries[this.objectID];
    }
}
exports.DBObjectQueries = DBObjectQueries;
//# sourceMappingURL=DBObjectQueries.js.map
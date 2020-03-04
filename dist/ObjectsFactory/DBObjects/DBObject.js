"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TemplateSchema_1 = require("./TemplateSchema");
class DBObject {
    constructor(ID) {
        this.objectID = ID;
    }
    createObject() {
        return TemplateSchema_1.Objects[this.objectID];
    }
}
exports.DBObject = DBObject;
//# sourceMappingURL=DBObject.js.map
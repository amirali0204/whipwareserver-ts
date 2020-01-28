"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DataSchema = new mongoose_1.Schema({
    id: String,
    ObjectName: String,
    ObjectSchema: String,
    FieldNames: [{ Name: String, Type: String, nullable: Boolean, AuthorizedRoles: [String] }]
}, { timestamps: true });
// Object are the entities which holds the Data to be shared by Functions as input and outputs
module.exports = mongoose_1.model("Objects", DataSchema);
//# sourceMappingURL=Objects.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DataSchema = new mongoose_1.Schema({
    id: String,
    OBJName: String,
    DBSchema: String,
    Attributes: [{ Name: String, DataType: String }],
    EnterpriseID: String,
    AppID: String,
    State: String
}, { timestamps: true });
// We will loop here on the Enterprises and applications for this Node.
// This nodes specific all application Objects will be loaded based on UUID of application
module.exports = mongoose_1.model("DVObjects", DataSchema);
//# sourceMappingURL=DBObjects.js.map
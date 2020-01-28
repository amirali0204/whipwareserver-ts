"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.DBOjects = new mongoose_1.Schema({
    id: String,
    OBJName: String,
    DBSchema: String,
    Attributes: [{ Name: String, DataType: String }],
    EnterpriseID: String,
    AppID: String,
    State: String
}, { timestamps: true });
//# sourceMappingURL=EnterpriseObjects.js.map
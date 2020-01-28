"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DataSchema = new mongoose_1.Schema({
    id: String,
    AppName: String,
    EnterpriseID: String,
    State: String,
    URL: String
}, { timestamps: true });
module.exports = mongoose_1.model("Applications", DataSchema);
//# sourceMappingURL=Applications.js.map
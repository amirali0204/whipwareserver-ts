"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DataSchema = new mongoose_1.Schema({
    id: String,
    FunName: String,
    Type: String,
    InputAttribute: [{ DVObject: String }],
    OutputAttribute: [{ DVObject: String }],
    ActionID: String,
    EnterpriseID: String,
    AppID: String
}, { timestamps: true });
// Load modules per Enterprise Application
module.exports = mongoose_1.model("Functions", DataSchema);
//# sourceMappingURL=Functions.js.map
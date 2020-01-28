"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DataSchema = new mongoose_1.Schema({
    id: String,
    RulesName: String,
    RuleSchema: String,
    Conditions: String,
    Actions: String,
    Events: String,
    EnterpriseID: String,
    AppID: String
}, { timestamps: true });
module.exports = mongoose_1.model("Rules", DataSchema);
//# sourceMappingURL=Rules.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.DVRules = new mongoose_1.Schema({
    id: String,
    RulesName: String,
    RuleSchema: String,
    Conditions: String,
    Actions: String,
    Events: String,
    EnterpriseID: String,
    AppID: String
}, { timestamps: true });
//# sourceMappingURL=Rules.js.map
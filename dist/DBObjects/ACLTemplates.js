"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DataSchema = new mongoose_1.Schema({
    id: String,
    aclName: String,
    EnterpriseID: String,
    ACLRules: String,
    State: String
}, { timestamps: true });
module.exports = mongoose_1.model("ACLTemplates", DataSchema);
//# sourceMappingURL=ACLTemplates.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const constants_1 = require("../constants");
const DataSchema = new mongoose_1.Schema({
    _id: mongoose_1.Types.ObjectId,
    id: String,
    AppName: String,
    EnterpriseID: String,
    State: String,
    URL: String
}, { timestamps: true });
// For Loop on All Enterprises Applications and export with UUID()_Applications as schema Name
// Conditional Exports based on UUID gathered for the Enterprises
exports.default = mongoose_1.model(constants_1.AdminUUID + "Applications", DataSchema);
//# sourceMappingURL=Applications.js.map
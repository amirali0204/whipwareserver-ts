"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DataSchema = new mongoose_1.Schema({
    id: String,
    GRPName: String,
    Users: String
}, { timestamps: true });
module.exports = mongoose_1.model("Groups", DataSchema);
//# sourceMappingURL=Groups.js.map
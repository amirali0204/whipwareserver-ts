"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DataSchema = new mongoose_1.Schema({
    id: String,
    STMName: String,
    Machine: String,
    InputAttribute: [{ DVObjects: String }],
    OutputAttributes: [{ DVObjects: String }],
    EnterpriseID: String,
    AppID: String,
    State: String
}, { timestamps: true });
module.exports = mongoose_1.model("StateMachines", DataSchema);
//# sourceMappingURL=StateMachines.js.map
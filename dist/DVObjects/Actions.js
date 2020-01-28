"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DataSchema = new mongoose_1.Schema({
    id: String,
    ActionName: String,
    InputAttributes: [{ DVObjects: String }],
    OutputAttributes: [{ DVObjects: String }],
    ActionType: String,
    ActionTarget: String,
    EnterpriseID: String,
    ApplicationID: String
}, { timestamps: true });
const Actions = mongoose_1.model("Actions", DataSchema);
exports.default = Actions;
//# sourceMappingURL=Actions.js.map
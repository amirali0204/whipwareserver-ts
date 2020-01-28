"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DataSchema = new mongoose_1.Schema({
    id: String,
    StateTaskName: String,
    Actions: [{ ActionName: String, ActionTarget: String }],
    EnterpriseID: String,
    AppID: String
}, { timestamps: true });
module.exports = mongoose_1.model("StateTasks", DataSchema);
//# sourceMappingURL=StateTasks.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.StateMachines = new mongoose_1.Schema({
    id: String,
    STMName: String,
    Machine: String,
    InputAttribute: [{ DVObjects: String }],
    OutputAttributes: [{ DVObjects: String }],
    EnterpriseID: String,
    AppID: String,
    State: String
}, { timestamps: true });
//# sourceMappingURL=StateMachines.js.map
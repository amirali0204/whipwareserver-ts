"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DataSchema = new mongoose_1.Schema({
    id: String,
    TaskTitle: String,
    UserAssignee: String,
    EscalationHistory: [{ User: String, DateAllocated: Date, DateEscalated: Date, Reason: String }],
    State: String,
    StateHistory: [{ StateTo: String, StateFrom: String, Executor: String, Results: String, executionTime: Date }],
    TaskID: String,
    TaskTags: [{ TagID: String, TagName: String }]
}, { timestamps: true });
module.exports = mongoose_1.model("Tasks", DataSchema);
//# sourceMappingURL=Tasks.js.map
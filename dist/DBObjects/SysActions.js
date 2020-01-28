"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DataSchema = new mongoose_1.Schema({
    id: String,
    SysAction: String,
    InputAttributes: [{ DVObject: String }],
    OutputAttributes: [{ DVObject: String }],
    Category: String
}, { timestamps: true });
module.exports = mongoose_1.model("SysActions", DataSchema);
//# sourceMappingURL=SysActions.js.map
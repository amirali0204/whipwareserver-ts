"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.Functions = new mongoose_1.Schema({
    id: String,
    FunName: String,
    Type: String,
    InputAttribute: [{ DVObject: String }],
    OutputAttribute: [{ DVObject: String }],
    SysActionID: String,
    ResolversSchema: String,
    EnterpriseID: String,
    AppID: String
}, { timestamps: true });
//# sourceMappingURL=Functions.js.map
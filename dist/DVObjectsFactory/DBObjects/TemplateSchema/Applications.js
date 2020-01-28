"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.Applications = new mongoose_1.Schema({
    _id: mongoose_1.Types.ObjectId,
    id: String,
    AppName: String,
    EnterpriseID: String,
    State: String,
    URL: String
}, { timestamps: true });
//# sourceMappingURL=Applications.js.map
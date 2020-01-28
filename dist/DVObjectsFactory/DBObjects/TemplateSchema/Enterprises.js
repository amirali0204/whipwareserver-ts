"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.DVEnterprises = new mongoose_1.Schema({
    _id: mongoose_1.Types.ObjectId,
    id: String,
    EnterpriseName: String,
    type: String,
    State: String
}, { timestamps: true });
//# sourceMappingURL=Enterprises.js.map
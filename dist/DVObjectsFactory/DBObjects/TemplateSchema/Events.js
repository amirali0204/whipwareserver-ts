"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.DVEvents = new mongoose_1.Schema({
    id: String,
    EventName: String,
    EnterpriseID: String,
    AppID: String
}, { timestamps: true });
//# sourceMappingURL=Events.js.map
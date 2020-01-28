"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DataSchema = new mongoose_1.Schema({
    id: String,
    EventName: String,
    EnterpriseID: String,
    AppID: String
}, { timestamps: true });
module.exports = mongoose_1.model("Events", DataSchema);
//# sourceMappingURL=Events.js.map
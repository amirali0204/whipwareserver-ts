"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DataSchema = new mongoose_1.Schema({
    id: String,
    Name: String,
    AttributeSource: String,
    Layout: [{ PropertyName: String, PropertyValue: String }]
}, { timestamps: true });
module.exports = mongoose_1.model("UIComponents", DataSchema);
//# sourceMappingURL=UIComponents.js.map
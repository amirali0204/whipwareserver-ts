"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DataSchema = new mongoose_1.Schema({
    _id: mongoose_1.Types.ObjectId,
    id: String,
    ObjectName: String,
    Fields: [{ FieldName: String, DataType: String }]
}, { timestamps: true });
module.exports = mongoose_1.model("DVObjects", DataSchema);
//# sourceMappingURL=DVObjectSchema.js.map
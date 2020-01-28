"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DataSchema = new mongoose_1.Schema({
    id: String,
    ScreenName: String,
    ScreenType: String,
    ScreenProperty: [{ PropertyName: String, PropertyValue: String }],
    Component: [{ ComponentID: String, positionx: Number, positiony: Number }],
    EnterpriseID: String,
    AppID: String
}, { timestamps: true });
module.exports = mongoose_1.model("AppScreens", DataSchema);
//# sourceMappingURL=AppScreens.js.map
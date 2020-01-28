"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DataSchema = new mongoose_1.Schema({
    id: String,
    EnterpriseID: String,
    login: String,
    Nick: String,
    FirstName: String,
    LastName: String,
    DOB: { type: Date, default: Date.now },
    Gender: String,
    isACLLocal: Boolean,
    ACLLocal: String,
    ACLTemplate: String,
    AccessToken: String,
    AccessTokenExpiry: Date,
    State: String,
    ActiveSessions: String
}, { timestamps: true });
module.exports = mongoose_1.model("Users", DataSchema);
//# sourceMappingURL=Users.js.map
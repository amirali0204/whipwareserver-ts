"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.m_Applications = {
    DVID: String,
    AppName: String,
    EnterpriseID: String,
    State: String,
    Relation: [{
            Name: String,
            Users: [String],
            Groups: [String],
            Roles: [String],
            AppIDs: [String],
            EnterpriseID: String
        }]
};
exports.m_ApplicationsQueries = {
    FindByAppName: {
        AppName: "AppNameValue"
    },
    FindByAppNameArgs: [
        "AppName"
    ]
};
//# sourceMappingURL=Applications.js.map
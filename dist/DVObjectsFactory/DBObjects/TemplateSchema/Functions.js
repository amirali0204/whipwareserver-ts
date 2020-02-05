"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.m_Functions = {
    DVID: String,
    FunctionName: String,
    Type: String,
    EnterpriseID: String,
    AppID: [String],
    Relation: [{
            Name: String,
            Users: [String],
            Groups: [String],
            Roles: [String],
            AppIDs: [String],
            EnterpriseID: String
        }]
};
exports.m_FunctionsQueries = {
    FindByFunctionName: {
        FunctionName: "FunctionNameValue"
    },
    FindByFunctionNameArgs: [
        "FunctionName"
    ]
};
//# sourceMappingURL=Functions.js.map
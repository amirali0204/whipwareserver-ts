"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.m_Groups = {
    DVID: String,
    EnterpriseID: String,
    Users: [String],
    Groups: [String],
    GroupName: String,
    Relation: [{
            Name: String,
            Users: [String],
            Groups: [String],
            Roles: [String],
            AppIDs: [String],
            EnterpriseID: String
        }],
};
exports.m_GroupsQueries = {
    FindByGroupName: {
        GroupName: "GroupNameValue"
    },
    FindByGroupNameArgs: [
        "GroupName"
    ]
};
//# sourceMappingURL=Groups.js.map
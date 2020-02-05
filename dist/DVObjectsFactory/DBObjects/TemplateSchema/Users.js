"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.m_Users = {
    DVID: String,
    EnterpriseID: String,
    Role: [String],
    Groups: [String],
    State: String,
    UserName: String,
    Password: String,
    FirstName: String,
    LastName: String,
    FullName: String,
    Relation: [{
            Name: String,
            Users: [String],
            Groups: [String],
            Roles: [String],
            AppIDs: [String],
            EnterpriseID: String
        }]
};
exports.m_UsersQueries = {
    FindByFirstName: {
        FirstName: "FirstNameValue"
    },
    FindByNameArgs: [
        "FirstName"
    ],
    FindByUserName: {
        UserName: "UserNameValue"
    },
    FindByUserNameArgs: ["UserName"]
};
//# sourceMappingURL=Users.js.map
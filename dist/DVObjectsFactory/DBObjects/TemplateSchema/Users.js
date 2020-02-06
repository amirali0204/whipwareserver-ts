"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.m_Users = {
    DVID: String,
    EnterpriseID: String,
    Role: [String],
    Groups: [String],
    State: String,
    UserName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    Password: String,
    FirstName: String,
    LastName: String,
    FullName: String,
    Tokens: [{
            token: {
                type: String,
                required: true
            }
        }],
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
    FindByCred: {
        UserName: "UserNameValue",
    },
    FindByCredArgs: ["UserName"]
};
//# sourceMappingURL=Users.js.map
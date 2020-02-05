"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.m_DBObjects = {
    DVID: String,
    ObjectName: String,
    Type: [String],
    EnterpriseID: String,
    AppID: String,
    Relations: [{
            Name: String,
            ActionsAllowed: [String] // Allowed list of Actions they can perform per object
        }],
    OwnerRights: {
        Users: [String],
        Groups: [String],
        Roles: [String],
        EnterpriseID: [String]
    },
    Fields: [{
            Name: String,
            DataType: String,
            Allowed: [{
                    Users: [String],
                    Groups: [String],
                    Roles: [String],
                    EnterpriseID: [String]
                }] // By Default always we will empose block all functionalities
        }]
};
exports.m_DBObjectsQueries = {
    FindByObjectName: {
        ObjectName: "ObjectNameValue"
    },
    FindByObjectNameArgs: [
        "ObjectName"
    ]
};
//# sourceMappingURL=DBObjects.js.map
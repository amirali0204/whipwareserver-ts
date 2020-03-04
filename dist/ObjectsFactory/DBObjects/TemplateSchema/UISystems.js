"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.m_UISystems = {
    DVID: String,
    ScreenName: String,
    Type: String,
    EnterpriseID: String,
    AppID: String,
    Components: [{
            ComponentName: String,
            Relation: [{
                    Name: String,
                    Users: [String],
                    Groups: [String],
                    Roles: [String],
                    AppIDs: [String],
                    EnterpriseID: String
                }],
            Attributes: [{
                    AttributesName: String,
                    Relation: [{
                            Name: String,
                            Users: [String],
                            Groups: [String],
                            Roles: [String],
                            AppIDs: [String],
                            EnterpriseID: String
                        }]
                }]
        }],
};
exports.m_UISystemsQueries = {
    FindByScreenName: {
        ScreenName: "ScreenNameValue"
    },
    FindByScreenNameArgs: [
        "ScreenName"
    ]
};
//# sourceMappingURL=UISystems.js.map
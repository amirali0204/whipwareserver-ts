"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.m_EnterpriseManagement = {
    DVID: String,
    EnterpriseName: String,
    Type: String,
    State: String // lifecycle of an Enterprise need to design in STM
};
exports.m_EnterpriseManagementQueries = {
    FindByName: {
        EnterpriseName: "EnterpriseNameValue"
    },
    FindByNameArgs: [
        "EnterpriseName"
    ],
    FindByType: {
        Type: "TypeValue"
    },
    FindByTypeArgs: ["Type"]
};
//# sourceMappingURL=EnterpriseManagement.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.m_EnterpriseManagement = {
    DVID: String,
    EnterpriseName: String,
    Type: String,
    State: String // lifecycle of an Enterprise need to design in STM
};
exports.m_EnterpriseManagementQueries = {
    findByName: {
        EnterpriseName: String
    },
    findByID: {
        DVID: String
    }
};
//# sourceMappingURL=EnterpriseManagement.js.map
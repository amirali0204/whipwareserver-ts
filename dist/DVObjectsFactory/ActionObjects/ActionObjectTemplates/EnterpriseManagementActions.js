"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.m_EnterpriseManagementFIND = {
    DVID: ["String", 32, 32]
};
exports.m_EnterpriseManagementCREATE = {};
exports.m_EnterpriseManagementUPDATE = {};
exports.m_EnterpriseManagementDELETE = {};
exports.m_EnterpriseManagementFindByName = {};
exports.m_EnterpriseManagementFindByType = {
    Type: {
        dataType: ["isDefined", "isString"],
        doubleattribute: {
            minLength: 5,
            maxLength: 32
        }
    }
};
exports.m_ValidateAdminEnterpriseValidate = {
    Type: {
        dataType: ["isDefined", "isString"],
        doubleattribute: {
            minLength: 5,
            maxLength: 32
        }
    }
};
//# sourceMappingURL=EnterpriseManagementActions.js.map
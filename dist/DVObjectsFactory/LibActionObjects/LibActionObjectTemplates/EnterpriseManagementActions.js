"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.m_EnterpriseManagementFIND = {
    DVID: {
        dataType: ["isDefined", "isString"],
        doubleattribute: {
            minLength: 5,
            maxLength: 32
        }
    }
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
exports.m_EnterpriseManagementFindByTypeResp = {
    OBJ_EnterpriseName: {
        __Name: "EnterpriseManagement",
        __Source: ["EnterpriseManagement", "Response"],
        __Type: "Array",
        _id: "_id",
        Type: "Type",
        State: "State",
        DVID: "DVID"
    }
};
exports.m_ValidateAdminEnterpriseValidateResp = {
    OBJ_ValidateAdminEnterprise: {
        __Name: "ValidateAdminEnterprise",
        __Source: ["ValidateAdminEnterprise", "EnterpriseManagement", "Response"],
        __Type: "Array",
        _id: "_id",
        Type: "Type",
        State: "State",
        DVID: "DVID"
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
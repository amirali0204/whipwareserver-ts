
export const m_EnterpriseManagementFIND = {
    DVID: ["String", 32, 32]
};
export const m_EnterpriseManagementCREATE = {};
export const m_EnterpriseManagementUPDATE = {};
export const m_EnterpriseManagementDELETE = {};
export const m_EnterpriseManagementFindByName = {};
export const m_EnterpriseManagementFindByType = {
    Type: {
        dataType: ["isDefined", "isString"],
        doubleattribute: {
            minLength: 5,
            maxLength: 32
        }
    }
};
export const m_EnterpriseManagementFindByTypeResp = {
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
export const m_ValidateAdminEnterpriseValidateResp = {
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

export const m_ValidateAdminEnterpriseValidate = {
    Type: {
        dataType: ["isDefined", "isString"],
        doubleattribute: {
            minLength: 5,
            maxLength: 32
        }
    }
};

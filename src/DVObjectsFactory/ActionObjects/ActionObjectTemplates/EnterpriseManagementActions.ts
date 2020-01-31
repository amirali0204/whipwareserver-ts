
export const m_EnterpriseManagementFIND = {
    DVID: ["String", 32, 32]
};
export const m_EnterpriseManagementCREATE = {};
export const m_EnterpriseManagementUPDATE = {};
export const m_EnterpriseManagementDELETE = {};
export const m_EnterpriseManagementFindByName = {};
export const m_EnterpriseManagementFindByType = { // type, minlen, maxlen, isReq, nullable
    Type: {
        dataType: ["isDefined", "isString"],
        doubleattribute: {
            minLength: 5,
            maxLength: 32
        }
    }
};
export const m_ValidateAdminEnterpriseValidate = { // type, minlen, maxlen, isReq, nullable
    Type: {
        dataType: ["isDefined", "isString"],
        doubleattribute: {
            minLength: 5,
            maxLength: 32
        }
    }
};


export const m_ApplicationsFIND = {
    DVID: ["String", 32, 32]
};
export const m_ApplicationsCREATE = {};
export const m_ApplicationsUPDATE = {};
export const m_ApplicationsDELETE = {};
export const m_ApplicationsFindByName = {};
export const m_ApplicationsFindByTypes = {
    Type: {
        dataType: ["isDefined", "isString"],
        doubleattribute: {
            minLength: 5,
            maxLength: 32
        }
    }
};
export const m_ApplicationsFindByTypesResp = {
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

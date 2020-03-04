export const m_FunctionsFIND = {
    DVID: ["String", 32, 32]
};
export const m_FunctionsCREATE = {};
export const m_FunctionsUPDATE = {};
export const m_FunctionsDELETE = {};
export const m_FunctionsFindByName = {};
export const m_FunctionsFindByType = {
    Type: {
        dataType: ["isDefined", "isString"],
        doubleattribute: {
            minLength: 5,
            maxLength: 32
        }
    }
};
export const m_FunctionsFindByTypeResp = {
    OBJ_Functions: {
        __Name: "Functions",
        __Source: ["Functions", "Response"],
        __Type: "Array",
        _id: "_id",
        Type: "Type",
        State: "State",
        DVID: "DVID"
    }
};

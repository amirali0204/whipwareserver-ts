
export const m_DBObjectsFIND = {
    DVID: ["String", 32, 32]
};
export const m_DBObjectsCREATE = {};
export const m_DBObjectsUPDATE = {};
export const m_DBObjectsDELETE = {};
export const m_DBObjectsFindByName = {};
export const m_DBObjectsFindByType = {
    Type: {
        dataType: ["isDefined", "isString"],
        doubleattribute: {
            minLength: 5,
            maxLength: 32
        }
    }
};
export const m_DBObjectsFindByTypeResp = {
    OBJ_DBObject: {
        __Name: "DBObject",
        __Source: ["DBObject", "Response"],
        __Type: "Array",
        _id: "_id",
        Type: "Type",
        State: "State",
        DVID: "DVID"
    }
};

export const m_GroupsFIND = {
    DVID: ["String", 32, 32]
};
export const m_GroupsCREATE = {};
export const m_GroupsUPDATE = {};
export const m_GroupsDELETE = {};
export const m_GroupsFindByName = {};
export const m_GroupsFindByType = {
    Type: {
        dataType: ["isDefined", "isString"],
        doubleattribute: {
            minLength: 5,
            maxLength: 32
        }
    }
};
export const m_GroupsFindByTypeResp = {
    OBJ_Group: {
        __Name: "Group",
        __Source: ["Group", "Response"],
        __Type: "Array",
        _id: "_id",
        Type: "Type",
        State: "State",
        DVID: "DVID"
    }
};

export const m_UIScreensFIND = {
    DVID: ["String", 32, 32]
};
export const m_UIScreensCREATE = {};
export const m_UIScreensUPDATE = {};
export const m_UIScreensDELETE = {};
export const m_UIScreensFindByName = {};
export const m_UIScreensFindByType = {
    Type: {
        dataType: ["isDefined", "isString"],
        doubleattribute: {
            minLength: 5,
            maxLength: 32
        }
    }
};
export const m_UIScreensFindByTypeResp = {
    OBJ_UIScreen: {
        __Name: "UIScreen",
        __Source: ["UIScreen", "Response"],
        __Type: "Array",
        _id: "_id",
        Type: "Type",
        State: "State",
        DVID: "DVID"
    }
};

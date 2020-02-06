export const m_UsersFIND = {
    DVID: ["String", 32, 32]
};
export const m_UsersCREATE = {};
export const m_UsersUPDATE = {};
export const m_UsersDELETE = {};
export const m_UsersFindByName = {};
export const m_UsersFindByCred = {
    UserName: {
        dataType: ["isDefined", "isString"],
        doubleattribute: {
            minLength: 5,
            maxLength: 32
        }
    },
    Password: {
        dataType: ["isDefined", "isString"],
        doubleattribute: {
            minLength: 5,
            maxLength: 32
        }
    }
};
export const m_UsersFindByCredResp = {
    OBJ_User: {
        __Name: "User",
        __Source: ["User", "Response"],
        __Type: "Array",
        _id: "_id",
        State: "State",
        DVID: "DVID"
    }
};

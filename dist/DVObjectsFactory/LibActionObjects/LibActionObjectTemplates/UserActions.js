"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.m_UsersFIND = {
    DVID: ["String", 32, 32]
};
exports.m_UsersCREATE = {};
exports.m_UsersUPDATE = {};
exports.m_UsersDELETE = {};
exports.m_UsersFindByName = {};
exports.m_UsersFindByCred = {
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
exports.m_UsersFindByCredResp = {
    OBJ_User: {
        __Name: "User",
        __Source: ["User", "Response"],
        __Type: "Array",
        _id: "_id",
        State: "State",
        DVID: "DVID"
    }
};
//# sourceMappingURL=UserActions.js.map
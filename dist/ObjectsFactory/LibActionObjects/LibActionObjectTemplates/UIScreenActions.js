"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.m_UIScreensFIND = {
    DVID: ["String", 32, 32]
};
exports.m_UIScreensCREATE = {};
exports.m_UIScreensUPDATE = {};
exports.m_UIScreensDELETE = {};
exports.m_UIScreensFindByName = {};
exports.m_UIScreensFindByType = {
    Type: {
        dataType: ["isDefined", "isString"],
        doubleattribute: {
            minLength: 5,
            maxLength: 32
        }
    }
};
exports.m_UIScreensFindByTypeResp = {
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
//# sourceMappingURL=UIScreenActions.js.map
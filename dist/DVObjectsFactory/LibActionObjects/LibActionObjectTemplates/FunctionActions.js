"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.m_FunctionsFIND = {
    DVID: ["String", 32, 32]
};
exports.m_FunctionsCREATE = {};
exports.m_FunctionsUPDATE = {};
exports.m_FunctionsDELETE = {};
exports.m_FunctionsFindByName = {};
exports.m_FunctionsFindByType = {
    Type: {
        dataType: ["isDefined", "isString"],
        doubleattribute: {
            minLength: 5,
            maxLength: 32
        }
    }
};
exports.m_FunctionsFindByTypeResp = {
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
//# sourceMappingURL=FunctionActions.js.map
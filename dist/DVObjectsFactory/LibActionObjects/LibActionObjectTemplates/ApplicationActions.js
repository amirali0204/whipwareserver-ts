"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.m_ApplicationsFIND = {
    DVID: ["String", 32, 32]
};
exports.m_ApplicationsCREATE = {};
exports.m_ApplicationsUPDATE = {};
exports.m_ApplicationsDELETE = {};
exports.m_ApplicationsFindByName = {};
exports.m_ApplicationsFindByTypes = {
    Type: {
        dataType: ["isDefined", "isString"],
        doubleattribute: {
            minLength: 5,
            maxLength: 32
        }
    }
};
exports.m_ApplicationsFindByTypesResp = {
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
//# sourceMappingURL=ApplicationActions.js.map
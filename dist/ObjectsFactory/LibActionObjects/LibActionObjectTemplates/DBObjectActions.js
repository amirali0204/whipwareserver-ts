"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.m_DBObjectsFIND = {
    DVID: ["String", 32, 32]
};
exports.m_DBObjectsCREATE = {};
exports.m_DBObjectsUPDATE = {};
exports.m_DBObjectsDELETE = {};
exports.m_DBObjectsFindByName = {};
exports.m_DBObjectsFindByType = {
    Type: {
        dataType: ["isDefined", "isString"],
        doubleattribute: {
            minLength: 5,
            maxLength: 32
        }
    }
};
exports.m_DBObjectsFindByTypeResp = {
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
//# sourceMappingURL=DBObjectActions.js.map
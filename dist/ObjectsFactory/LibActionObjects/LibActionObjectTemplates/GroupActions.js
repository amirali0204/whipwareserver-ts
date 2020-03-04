"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.m_GroupsFIND = {
    DVID: ["String", 32, 32]
};
exports.m_GroupsCREATE = {};
exports.m_GroupsUPDATE = {};
exports.m_GroupsDELETE = {};
exports.m_GroupsFindByName = {};
exports.m_GroupsFindByType = {
    Type: {
        dataType: ["isDefined", "isString"],
        doubleattribute: {
            minLength: 5,
            maxLength: 32
        }
    }
};
exports.m_GroupsFindByTypeResp = {
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
//# sourceMappingURL=GroupActions.js.map
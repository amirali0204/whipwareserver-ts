"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.m_AuthenticateLogin = {
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
exports.m_AuthenticateLoginResp = {};
//# sourceMappingURL=AuthenticateAction.js.map
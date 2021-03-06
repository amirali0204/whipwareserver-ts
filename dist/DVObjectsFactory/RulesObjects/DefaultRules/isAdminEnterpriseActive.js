"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.m_isAdminEnterpriseActive = {
    conditions: {
        all: [{
                all: [{
                        fact: "EnterpriseManagement",
                        operator: "equal",
                        value: "Active",
                        path: "$.Response[0].State"
                    }, {
                        fact: "EnterpriseManagement",
                        operator: "equal",
                        value: "Admin",
                        path: "$.Response[0].Type"
                    }]
            }]
    },
    event: {
        type: "AdminEnterpriseExists",
        params: {
            message: "TRUE"
        }
    }
};
//# sourceMappingURL=isAdminEnterpriseActive.js.map
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const EnterpriseManagementActions = __importStar(require("./EnterpriseManagementActions"));
exports.DVActionObjects = {
    EnterpriseManagementFIND: EnterpriseManagementActions.m_EnterpriseManagementFIND,
    EnterpriseManagementCREATE: EnterpriseManagementActions.m_EnterpriseManagementCREATE,
    EnterpriseManagementUPDATE: EnterpriseManagementActions.m_EnterpriseManagementUPDATE,
    EnterpriseManagementFindByName: EnterpriseManagementActions.m_EnterpriseManagementFindByName,
    EnterpriseManagementFindByType: EnterpriseManagementActions.m_EnterpriseManagementFindByType
};
//# sourceMappingURL=index.js.map
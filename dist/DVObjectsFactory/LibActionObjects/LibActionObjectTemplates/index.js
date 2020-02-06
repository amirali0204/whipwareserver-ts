"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationActions = __importStar(require("./ApplicationActions"));
const Authenticate = __importStar(require("./AuthenticateAction"));
const DBObjectActions = __importStar(require("./DBObjectActions"));
const EnterpriseManagementActions = __importStar(require("./EnterpriseManagementActions"));
const FunctionActions = __importStar(require("./FunctionActions"));
const GroupActions = __importStar(require("./GroupActions"));
const UIScreenActions = __importStar(require("./UIScreenActions"));
const UserActions = __importStar(require("./UserActions"));
exports.DVActionObjects = {
    EnterpriseManagementFIND: EnterpriseManagementActions.m_EnterpriseManagementFIND,
    EnterpriseManagementCREATE: EnterpriseManagementActions.m_EnterpriseManagementCREATE,
    EnterpriseManagementUPDATE: EnterpriseManagementActions.m_EnterpriseManagementUPDATE,
    EnterpriseManagementFindByName: EnterpriseManagementActions.m_EnterpriseManagementFindByName,
    EnterpriseManagementFindByType: EnterpriseManagementActions.m_EnterpriseManagementFindByType,
    EnterpriseManagementFindByTypeResp: EnterpriseManagementActions.m_EnterpriseManagementFindByTypeResp,
    ValidateAdminEnterpriseValidate: EnterpriseManagementActions.m_ValidateAdminEnterpriseValidate,
    ValidateAdminEnterpriseValidateResp: EnterpriseManagementActions.m_ValidateAdminEnterpriseValidateResp,
    AuthenticateLogin: Authenticate.m_AuthenticateLogin,
    AuthenticateLoginResp: Authenticate.m_AuthenticateLoginResp,
    ApplicationsFIND: ApplicationActions.m_ApplicationsFIND,
    ApplicationsCREATE: ApplicationActions.m_ApplicationsCREATE,
    ApplicationsUPDATE: ApplicationActions.m_ApplicationsUPDATE,
    ApplicationsFindByName: ApplicationActions.m_ApplicationsFindByName,
    DBObjectsFIND: DBObjectActions.m_DBObjectsFIND,
    DBObjectsCREATE: DBObjectActions.m_DBObjectsCREATE,
    DBObjectsUPDATE: DBObjectActions.m_DBObjectsUPDATE,
    DBObjectsFindByName: DBObjectActions.m_DBObjectsFindByName,
    DBObjectsFindByType: DBObjectActions.m_DBObjectsFindByType,
    DBObjectsFindByTypeResp: DBObjectActions.m_DBObjectsFindByTypeResp,
    FunctionsFIND: FunctionActions.m_FunctionsFIND,
    FunctionsCREATE: FunctionActions.m_FunctionsCREATE,
    FunctionsUPDATE: FunctionActions.m_FunctionsUPDATE,
    FunctionsFindByName: FunctionActions.m_FunctionsFindByName,
    FunctionsFindByType: FunctionActions.m_FunctionsFindByType,
    FunctionsFindByTypeResp: FunctionActions.m_FunctionsFindByTypeResp,
    GroupActionsFIND: GroupActions.m_GroupsFIND,
    GroupCREATE: GroupActions.m_GroupsCREATE,
    GroupUPDATE: GroupActions.m_GroupsUPDATE,
    GroupFindByName: GroupActions.m_GroupsFindByName,
    GroupFindByType: GroupActions.m_GroupsFindByType,
    GroupFindByTypeResp: GroupActions.m_GroupsFindByTypeResp,
    UIScreenFIND: UIScreenActions.m_UIScreensFIND,
    UIScreenCREATE: UIScreenActions.m_UIScreensCREATE,
    UIScreenUPDATE: UIScreenActions.m_UIScreensUPDATE,
    UIScreenFindByName: UIScreenActions.m_UIScreensFindByName,
    UIScreenFindByType: UIScreenActions.m_UIScreensFindByType,
    UIScreenFindByTypeResp: UIScreenActions.m_UIScreensFindByTypeResp,
    UsersFIND: UserActions.m_UsersFIND,
    UsersCREATE: UserActions.m_UsersCREATE,
    UsersUPDATE: UserActions.m_UsersUPDATE,
    UsersFindByName: UserActions.m_UsersFindByName,
    UsersFindByCred: UserActions.m_UsersFindByCred,
    UsersFindByTypeResp: UserActions.m_UsersFindByCredResp,
};
//# sourceMappingURL=index.js.map
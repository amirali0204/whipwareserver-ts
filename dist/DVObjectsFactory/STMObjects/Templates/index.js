"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationsSTM_1 = require("./DVAdmin/ApplicationsSTM");
const DBObjectsSTM_1 = require("./DVAdmin/DBObjectsSTM");
const EnterpriseManagementSTM_1 = require("./DVAdmin/EnterpriseManagementSTM");
const FunctionsSTM_1 = require("./DVAdmin/FunctionsSTM");
const GroupsSTM_1 = require("./DVAdmin/GroupsSTM");
const UIScreensSTM_1 = require("./DVAdmin/UIScreensSTM");
const UsersSTM_1 = require("./DVAdmin/UsersSTM");
const ValidateAdminEnterpriseSTM_1 = require("./DVAdmin/ValidateAdminEnterpriseSTM");
const FunctionLauncherSTM_1 = require("./FunctionLauncherSTM");
exports.DVStateMachines = {
    EnterpriseManagement: EnterpriseManagementSTM_1.m_EnterpriseManagement,
    FunctionLauncher: FunctionLauncherSTM_1.m_FunctionLauncher,
    ValidateAdminEnterprise: ValidateAdminEnterpriseSTM_1.m_ValidateAdminEnterprise,
    Applications: ApplicationsSTM_1.m_Applications,
    Functions: FunctionsSTM_1.m_Functions,
    DBObjects: DBObjectsSTM_1.m_DBObjects,
    Groups: GroupsSTM_1.m_Groups,
    UIScreens: UIScreensSTM_1.m_UIScreens,
    Users: UsersSTM_1.m_Users
};
//# sourceMappingURL=index.js.map
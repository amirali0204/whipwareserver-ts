import {m_EnterpriseManagement, m_EnterpriseManagementActions} from "./DVAdmin/EnterpriseManagementSTM";
import {m_ValidateAdminEnterprise} from "./DVAdmin/ValidateAdminEnterpriseSTM";
import {m_FunctionLauncher} from "./FunctionLauncherSTM";

export const DVStateMachines = {
    EnterpriseManagement: m_EnterpriseManagement,
    FunctionLauncher: m_FunctionLauncher,
    ValidateAdminEnterprise: m_ValidateAdminEnterprise
};
export const DVStateActions = {EnterpriseManagementActions: m_EnterpriseManagementActions};

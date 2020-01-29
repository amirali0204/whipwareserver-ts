import {m_EnterpriseManagement, m_EnterpriseManagementActions} from "./DVAdmin/EnterpriseManagementSTM";
import {m_FunctionLauncher} from "./FunctionLauncherSTM";

export const DVStateMachines = {
    EnterpriseManagement: m_EnterpriseManagement,
    FunctionLauncher: m_FunctionLauncher
};
export const DVStateActions = {EnterpriseManagementActions: m_EnterpriseManagementActions};

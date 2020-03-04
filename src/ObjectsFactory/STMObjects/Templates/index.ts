import {m_Applications} from "./DVAdmin/ApplicationsSTM";
import {m_DBObjects} from "./DVAdmin/DBObjectsSTM";
import {m_EnterpriseManagement} from "./DVAdmin/EnterpriseManagementSTM";
import {m_Functions} from "./DVAdmin/FunctionsSTM";
import {m_Groups} from "./DVAdmin/GroupsSTM";
import {m_UIScreens} from "./DVAdmin/UIScreensSTM";
import {m_Users} from "./DVAdmin/UsersSTM";
import {m_FunctionLauncher} from "./FunctionLauncherSTM";
import {m_Authenticate} from "./Security/AuthenticateSTM";

export const DVStateMachines = {
    EnterpriseManagement: m_EnterpriseManagement,
    FunctionLauncher: m_FunctionLauncher,
    Applications: m_Applications,
    Functions: m_Functions,
    DBObjects: m_DBObjects,
    Groups: m_Groups,
    UIScreens: m_UIScreens,
    Users: m_Users,
    Authenticate: m_Authenticate,
};

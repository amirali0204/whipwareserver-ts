import {m_Applications} from "./Applications";
import {m_ApplicationsQueries} from "./Applications";
import {m_DBObjects} from "./DBObjects";
import {m_DBObjectsQueries} from "./DBObjects";
import {m_EnterpriseManagement} from "./EnterpriseManagement";
import {m_EnterpriseManagementQueries} from "./EnterpriseManagement";
import {m_Functions} from "./Functions";
import {m_FunctionsQueries} from "./Functions";
import {m_Groups} from "./Groups";
import {m_GroupsQueries} from "./Groups";
import {m_UISystems} from "./UISystems";
import {m_UISystemsQueries} from "./UISystems";
import {m_Users} from "./Users";
import {m_UsersQueries} from "./Users";

export const DVObjects = {
    EnterpriseManagement: m_EnterpriseManagement,
    Applications: m_Applications,
    DBObjects: m_DBObjects,
    Functions: m_Functions,
    Groups: m_Groups,
    UISystems: m_UISystems,
    Users: m_Users
};
export const DVObjectQueries = {
    EnterpriseManagementQueries: m_EnterpriseManagementQueries,
    ApplicationsQueries: m_ApplicationsQueries,
    DBObjectsQueries: m_DBObjectsQueries,
    FunctionsQueries: m_FunctionsQueries,
    GroupsQueries: m_GroupsQueries,
    UISystemsQueries: m_UISystemsQueries,
    UsersQueries: m_UsersQueries
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Applications_1 = require("./Applications");
const Applications_2 = require("./Applications");
const DBObjects_1 = require("./DBObjects");
const DBObjects_2 = require("./DBObjects");
const EnterpriseManagement_1 = require("./EnterpriseManagement");
const EnterpriseManagement_2 = require("./EnterpriseManagement");
const Functions_1 = require("./Functions");
const Functions_2 = require("./Functions");
const Groups_1 = require("./Groups");
const Groups_2 = require("./Groups");
const UISystems_1 = require("./UISystems");
const UISystems_2 = require("./UISystems");
const Users_1 = require("./Users");
const Users_2 = require("./Users");
exports.Objects = {
    EnterpriseManagement: EnterpriseManagement_1.m_EnterpriseManagement,
    Applications: Applications_1.m_Applications,
    DBObjects: DBObjects_1.m_DBObjects,
    Functions: Functions_1.m_Functions,
    Groups: Groups_1.m_Groups,
    UISystems: UISystems_1.m_UISystems,
    Users: Users_1.m_Users
};
exports.ObjectQueries = {
    EnterpriseManagementQueries: EnterpriseManagement_2.m_EnterpriseManagementQueries,
    ApplicationsQueries: Applications_2.m_ApplicationsQueries,
    DBObjectsQueries: DBObjects_2.m_DBObjectsQueries,
    FunctionsQueries: Functions_2.m_FunctionsQueries,
    GroupsQueries: Groups_2.m_GroupsQueries,
    UISystemsQueries: UISystems_2.m_UISystemsQueries,
    UsersQueries: Users_2.m_UsersQueries
};
//# sourceMappingURL=index.js.map
import * as bcryptjs from "bcryptjs";
import { schedulingPolicy } from "cluster";
import * as jwt from "jsonwebtoken";
import * as mongoose from "mongoose";
import uuid = require("uuid");
import {MongoSingleton} from "../DVBuilder/mongooseSingleton";
import { DBObjectCreator } from "../DVObjectsFactory/DBObjects/DBObjectCreator";
import { DVObjectCreator } from "../DVObjectsFactory/DVObjectCreator";
export class DVBuilder {
    public DVBuilder() {}
    public async validateAdminEnterprise() {
         /**
         * -- Create Enterprise Admin non Function call, directly by system only
         * -- Create Enterprise, Application, Function, Users, Groups, UIScreen Objects in DBObject with permissions profiles
         * -- Create User will Role Admin
         */
        const password = await bcryptjs.hash("admin", 8);
        let DVObjectsFactory: DVObjectCreator;
        const m_Function = "EnterpriseManagement";
        DVObjectsFactory = new DBObjectCreator(m_Function);
        let dbObject = {};
        dbObject = DVObjectsFactory.createObject();
        let m_schema = new mongoose.Schema(dbObject);
        if (MongoSingleton.getInstance().getDBConnectionHandler().models[m_Function] !== undefined) {
            MongoSingleton.getInstance().getDBConnectionHandler().deleteModel(m_Function);
        }
        const Schamatable = MongoSingleton.getInstance().getDBConnectionHandler().model(m_Function, m_schema);
        // No Relation this enterprise is immutable;
        const EnterpriseId = uuid();
        const Enterprisename = "DVAdmin";
        const EntID = EnterpriseId.split("-")[0];
        const admin = {EnterpriseName: Enterprisename, Type: "Admin", State: "Active", DVID: EnterpriseId, Relation: {}};
        const adminquery = {Type: "Admin"};
        const query = Schamatable.findOne(adminquery);
        await query.then(( result) => {
          console.log("EXEC FIND Query for Function - " + m_Function + " result - " + result + "  " );
          if (result === null) {
            console.log("EXEC FIND Query for Function - No Admin Enterprise Create 1" );
            // Creating Enterprise
            const NewEnterprise = new Schamatable(admin);
            NewEnterprise.save();
            // Create Application
            const AppId = uuid();
            const relation = [{
              Name: "Editor",
              EnterpriseID: EnterpriseId
            }, {
              Name: "Assignee",
              EnterpriseID: EnterpriseId
            }];
            const App = {DVID: AppId, AppName: "DVAdmin", EnterpriseID: EnterpriseId, State: "Active",
                      Relation: relation};
            const DBAppName =  "Applications";
            DVObjectsFactory = new DBObjectCreator(DBAppName);
            let AppdbObject = {};
            AppdbObject = DVObjectsFactory.createObject();
            m_schema = new mongoose.Schema(AppdbObject);
            if (MongoSingleton.getInstance().getDBConnectionHandler().models[DBAppName] !== undefined) {
                MongoSingleton.getInstance().getDBConnectionHandler().deleteModel(DBAppName);
            }
            const DBAppSchamatable = MongoSingleton.getInstance().getDBConnectionHandler().model(Enterprisename + EntID + DBAppName, m_schema);
            console.log("EXEC Save Query for Application - No Admin Enterprise Create 2" );
            const NewApp = new DBAppSchamatable(App);
            NewApp.save();

            // Create Admin User
            const UserId = uuid();
            const Userrelation = [{
              Name: "Editor",
              EnterpriseID: EnterpriseId,
              Users: [UserId],
              Roles: ["Admin"]
            }, {
              Name: "Assignee",
              EnterpriseID: EnterpriseId,
              Users: [UserId],
              Roles: ["Admin"]
            }];

            const AdminUser = {DVID: UserId, AppName: "DVAdmin", EnterpriseID: EnterpriseId, State: "Active",
            Role: ["Admin"], Groups: [], UserName: "admin", Password: password, FirstName: "Admin", LastName: "Admin",
            FullName: "Admin",  Relation: Userrelation};
            const DBUserName =  "Users";
            DVObjectsFactory = new DBObjectCreator(DBUserName);
            let UserdbObject = {};
            UserdbObject = DVObjectsFactory.createObject();
            m_schema = new mongoose.Schema(UserdbObject);
            if (MongoSingleton.getInstance().getDBConnectionHandler().models[DBUserName] !== undefined) {
                MongoSingleton.getInstance().getDBConnectionHandler().deleteModel(DBUserName);
            }
            const DBUserSchamatable = MongoSingleton.getInstance().getDBConnectionHandler().model(Enterprisename + EntID + DBUserName, m_schema);
            console.log("EXEC Save Query for Admin User for DV ADMIN APP - No Admin Enterprise Create 3" );
            const NewAdmin = new DBUserSchamatable(AdminUser);
            NewAdmin.save();
            // Creating objects now:
            // Enterprise first
            const DBObjectName =  "DBObjects";
            DVObjectsFactory = new DBObjectCreator(DBObjectName);
            let dbObject = {};
            dbObject = DVObjectsFactory.createObject();
            m_schema = new mongoose.Schema(dbObject);
            if (MongoSingleton.getInstance().getDBConnectionHandler().models[DBObjectName] !== undefined) {
                MongoSingleton.getInstance().getDBConnectionHandler().deleteModel(DBObjectName);
            }
            const DBObjSchamatable = MongoSingleton.getInstance().getDBConnectionHandler().model(Enterprisename + EntID + DBObjectName, m_schema);
  // ****************************************************/

            // Building Enterprise Privacy and Permission Rules for Admin App
            const Relationships = [{
              Name: "Assignee",
              ActionsAllowed: ["UPDATE", "FIND", "FindByType", "FindByName"]
            }, {
              Name: "Watcher",
              ActionsAllowed: ["FIND", "FindByType", "FindByName"]
            }, {
              Name: "Editor",
              ActionsAllowed: ["UPDATE", "FIND", "FindByType", "FindByName"]
            }, {
              Name: "Owner",
              ActionsAllowed: ["UPDATE", "FIND", "FindByType", "FindByName", "CREATE"]
            }, {
              Name: "Viewer",
              ActionsAllowed: ["FIND", "FindByType", "FindByName"]
            }];
            let ownerRights = {
              Users: [UserId], // We will create a new user and associate here
              Roles: ["Admin"],
              EnterpriseID: [EnterpriseId]
            };
            let fields = [{
              Name : "DVID",
              DataType: "String",
              Allowed: [{
                Users: [UserId], // Here we will allow Admin
                Groups: [],
                Roles: ["Admin"],
                EnterpriseID: [EnterpriseId]
              }]
            }, {
              Name : "EnterpriseName",
              DataType: "String",
              Allowed: [{
                Users: [UserId], // Here we will allow Admin
                Groups: [],
                Roles: ["Admin"],
                EnterpriseID: [EnterpriseId]
              }]
            }, {
              Name : "Type",
              DataType: "String",
              Allowed: [{
                Users: [UserId], // Here we will allow Admin
                Groups: [],
                Roles: ["Admin"],
                EnterpriseID: [EnterpriseId]
              }]
            }, {
              Name : "State",
              DataType: "String",
              Allowed: [{
                Users: [UserId], // Here we will allow Admin
                Groups: [],
                Roles: ["Admin"],
                EnterpriseID: [EnterpriseId]
              }]
            }];
            const EnterpriseObject = {ObjectName: "EnterpriseManagement", Type: "Core", EnterpriseID: EnterpriseId,
             AppID: AppId, DVID: uuid(), Relations: Relationships, OwnerRights: ownerRights, Fields: fields};
            const NewEntObject = new DBObjSchamatable(EnterpriseObject);
            NewEntObject.save();
            // Application Permission Schema Tables
            ownerRights = {
              Users: [UserId], // We will create a new user and associate here
              Roles: ["Admin"],
              EnterpriseID: [EnterpriseId]
            };
            fields = [{
              Name : "DVID",
              DataType: "String",
              Allowed: [{
                Users: [UserId], // Here we will allow Admin
                Groups: [],
                Roles: ["Admin"],
                EnterpriseID: [EnterpriseId]
              }]
            }, {
              Name : "AppName",
              DataType: "String",
              Allowed: [{
                Users: [UserId], // Here we will allow Admin
                Groups: [],
                Roles: ["Admin"],
                EnterpriseID: [EnterpriseId]
              }]
            }, {
              Name : "EnterpriseID",
              DataType: "String",
              Allowed: [{
                Users: [UserId], // Here we will allow Admin
                Groups: [],
                Roles: ["Admin"],
                EnterpriseID: [EnterpriseId]
              }]
            }, {
              Name : "State",
              DataType: "String",
              Allowed: [{
                Users: [UserId], // Here we will allow Admin
                Groups: [],
                Roles: ["Admin"],
                EnterpriseID: [EnterpriseId]
              }]
            }];
            const AppObject = {ObjectName: "Applications", Type: "Core", EnterpriseID: EnterpriseId,
             AppID: AppId, DVID: uuid(), Relations: Relationships, OwnerRights: ownerRights, Fields: fields};
            const NewAppObject = new DBObjSchamatable(AppObject);
            NewAppObject.save();

            // Now Functions Permission Schema Tables
            ownerRights = {
              Users: [UserId], // We will create a new user and associate here
              Roles: ["Admin"],
              EnterpriseID: [EnterpriseId]
            };
            fields = [{
              Name : "DVID",
              DataType: "String",
              Allowed: [{
                Users: [UserId], // Here we will allow Admin
                Groups: [],
                Roles: ["Admin"],
                EnterpriseID: [EnterpriseId]
              }]
            }, {
              Name : "FunctionName",
              DataType: "String",
              Allowed: [{
                Users: [UserId], // Here we will allow Admin
                Groups: [],
                Roles: ["Admin"],
                EnterpriseID: [EnterpriseId]
              }]
            }, {
              Name : "Type",
              DataType: "String",
              Allowed: [{
                Users: [UserId], // Here we will allow Admin
                Groups: [],
                Roles: ["Admin"],
                EnterpriseID: [EnterpriseId]
              }]
            }, {
              Name : "EnterpriseID",
              DataType: "String",
              Allowed: [{
                Users: [UserId], // Here we will allow Admin
                Groups: [],
                Roles: ["Admin"],
                EnterpriseID: [EnterpriseId]
              }]
            }, {
              Name : "AppID",
              DataType: "String",
              Allowed: [{
                Users: [UserId], // Here we will allow Admin
                Groups: [],
                Roles: ["Admin"],
                EnterpriseID: [EnterpriseId]
              }]
            }];
            const FuncObject = {ObjectName: "Functions", Type: "Core", EnterpriseID: EnterpriseId,
             AppID: AppId, DVID: uuid(), Relations: Relationships, OwnerRights: ownerRights, Fields: fields};
            const NewFuncObject = new DBObjSchamatable(FuncObject);
            NewFuncObject.save();

            // Now Groups Permission Schema Tables
            ownerRights = {
              Users: [UserId], // We will create a new user and associate here
              Roles: ["Admin"],
              EnterpriseID: [EnterpriseId]
            };
            fields = [{
              Name : "DVID",
              DataType: "String",
              Allowed: [{
                Users: [UserId], // Here we will allow Admin
                Groups: [],
                Roles: ["Admin"],
                EnterpriseID: [EnterpriseId]
              }]
            }, {
              Name : "EnterpriseID",
              DataType: "String",
              Allowed: [{
                Users: [UserId], // Here we will allow Admin
                Groups: [],
                Roles: ["Admin"],
                EnterpriseID: [EnterpriseId]
              }]
            }, {
              Name : "Users",
              DataType: "Array",
              Allowed: [{
                Users: [UserId], // Here we will allow Admin
                Groups: [],
                Roles: ["Admin"],
                EnterpriseID: [EnterpriseId]
              }]
            }, {
              Name : "Groups",
              DataType: "Array",
              Allowed: [{
                Users: [UserId], // Here we will allow Admin
                Groups: [],
                Roles: ["Admin"],
                EnterpriseID: [EnterpriseId]
              }]
            }, {
              Name : "GroupName",
              DataType: "String",
              Allowed: [{
                Users: [UserId], // Here we will allow Admin
                Groups: [],
                Roles: ["Admin"],
                EnterpriseID: [EnterpriseId]
              }]
            }];
            const GrpObject = {ObjectName: "Groups", Type: "Core", EnterpriseID: EnterpriseId,
             AppID: AppId, DVID: uuid(), Relations: Relationships, OwnerRights: ownerRights, Fields: fields};
            const NewGrpObject = new DBObjSchamatable(GrpObject);
            NewGrpObject.save();

            // Now UISystems Permission Schema Tables
            ownerRights = {
              Users: [UserId], // We will create a new user and associate here
              Roles: ["Admin"],
              EnterpriseID: [EnterpriseId]
            };
            fields = [{
              Name : "DVID",
              DataType: "String",
              Allowed: [{
                Users: [UserId], // Here we will allow Admin
                Groups: [],
                Roles: ["Admin"],
                EnterpriseID: [EnterpriseId]
              }]
            }, {
              Name : "ScreenName",
              DataType: "String",
              Allowed: [{
                Users: [UserId], // Here we will allow Admin
                Groups: [],
                Roles: ["Admin"],
                EnterpriseID: [EnterpriseId]
              }]
            }, {
              Name : "Type",
              DataType: "String",
              Allowed: [{
                Users: [UserId], // Here we will allow Admin
                Groups: [],
                Roles: ["Admin"],
                EnterpriseID: [EnterpriseId]
              }]
            }, {
              Name : "EnterpriseID",
              DataType: "String",
              Allowed: [{
                Users: [UserId], // Here we will allow Admin
                Groups: [],
                Roles: ["Admin"],
                EnterpriseID: [EnterpriseId]
              }]
            }, {
              Name : "AppID",
              DataType: "String",
              Allowed: [{
                Users: [UserId], // Here we will allow Admin
                Groups: [],
                Roles: ["Admin"],
                EnterpriseID: [EnterpriseId]
              }]
            }, {
              Name : "Components",
              DataType: "Array",
              Allowed: [{
                Users: [UserId], // Here we will allow Admin
                Groups: [],
                Roles: ["Admin"],
                EnterpriseID: [EnterpriseId]
              }]
            }];
            const UIObject = {ObjectName: "UISystems", Type: "Core", EnterpriseID: EnterpriseId,
              AppID: AppId, DVID: uuid(), Relations: Relationships, OwnerRights: ownerRights, Fields: fields};
            const NewUIObject = new DBObjSchamatable(UIObject);
            NewUIObject.save();

            // Now Users Permission Schema Tables
            ownerRights = {
              Users: [UserId], // We will create a new user and associate here
              Roles: ["Admin"],
              EnterpriseID: [EnterpriseId]
            };
            fields = [{
              Name : "DVID",
              DataType: "String",
              Allowed: [{
                Users: [UserId], // Here we will allow Admin
                Groups: [],
                Roles: ["Admin"],
                EnterpriseID: [EnterpriseId]
              }]
            }, {
              Name : "EnterpriseID",
              DataType: "String",
              Allowed: [{
                Users: [UserId], // Here we will allow Admin
                Groups: [],
                Roles: ["Admin"],
                EnterpriseID: [EnterpriseId]
              }]
            }, {
              Name : "Role",
              DataType: "Array",
              Allowed: [{
                Users: [UserId], // Here we will allow Admin
                Groups: [],
                Roles: ["Admin"],
                EnterpriseID: [EnterpriseId]
              }]
            }, {
              Name : "Groups",
              DataType: "Array",
              Allowed: [{
                Users: [UserId], // Here we will allow Admin
                Groups: [],
                Roles: ["Admin"],
                EnterpriseID: [EnterpriseId]
              }]
            }, {
              Name : "State",
              DataType: "String",
              Allowed: [{
                Users: [UserId], // Here we will allow Admin
                Groups: [],
                Roles: ["Admin"],
                EnterpriseID: [EnterpriseId]
              }]
            }, {
              Name : "UserName",
              DataType: "String",
              Allowed: [{
                Users: [UserId], // Here we will allow Admin
                Groups: [],
                Roles: ["Admin"],
                EnterpriseID: [EnterpriseId]
              }]
            }, {
              Name : "Password",
              DataType: "String",
              Allowed: [{
                Users: [UserId], // Here we will allow Admin
                Groups: [],
                Roles: ["Admin"],
                EnterpriseID: [EnterpriseId]
              }]
            }, {
              Name : "FirstName",
              DataType: "String",
              Allowed: [{
                Users: [UserId], // Here we will allow Admin
                Groups: [],
                Roles: ["Admin"],
                EnterpriseID: [EnterpriseId]
              }]
            }, {
              Name : "LastName",
              DataType: "String",
              Allowed: [{
                Users: [UserId], // Here we will allow Admin
                Groups: [],
                Roles: ["Admin"],
                EnterpriseID: [EnterpriseId]
              }]
            }, {
              Name : "FullName",
              DataType: "String",
              Allowed: [{
                Users: [UserId], // Here we will allow Admin
                Groups: [],
                Roles: ["Admin"],
                EnterpriseID: [EnterpriseId]
              }]
            }, {
              Name : "Tokens",
              DataType: "Array",
              Allowed: [{
                Users: [UserId], // Here we will allow Admin
                Groups: [],
                Roles: ["Admin"],
                EnterpriseID: [EnterpriseId]
              }]
            }];
            const UserObject = {ObjectName: "UISystems", Type: "Core", EnterpriseID: EnterpriseId,
              AppID: AppId, DVID: uuid(), Relations: Relationships, OwnerRights: ownerRights, Fields: fields};
            const NewUserObject = new DBObjSchamatable(UserObject);
            NewUserObject.save();
          }
      });
        return 1;
    }
}

export const m_DBObjects = {
  DVID: String,
  ObjectName: String,
  Type: [String], // Core, UserDefined
  EnterpriseID: String,
  AppID: String,
  Relations: [{// these permissions will be handled per object Collections
    Name: String, // Editor, Viewer, Assignee, Owner, Watcher, Custom...
    ActionsAllowed: [String] // Allowed list of Actions they can perform per object
  }], // below are all per record basis records
  OwnerRights: {
    Users: [String],
    Groups: [String],
    Roles: [String],
    EnterpriseID: [String]
  },
  Fields: [{ // list of all fields inside the DBObject
    Name: String,
    DataType: String,
    Allowed: [{ // List of all users, Groups or Roles which will get access to these fields.
      Users: [String],
      Groups: [String],
      Roles: [String],
      EnterpriseID: [String]
    }]// By Default always we will empose block all functionalities
  }]
};
export const m_DBObjectsQueries = {
  FindByObjectName: {
        ObjectName: "ObjectNameValue"
  },
  FindByObjectNameArgs: [
        "ObjectName"
  ]
};

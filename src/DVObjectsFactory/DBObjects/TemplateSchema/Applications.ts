export const m_Applications = {
  DVID: String,
  AppName: String,
  EnterpriseID: String,
  State: String,
  Relation: [{// These users, Groups and Roles can be given any above mentioned Relation
    Name: String,
    Users: [String],
    Groups: [String],
    Roles: [String],
    AppIDs: [String],
    EnterpriseID: String
  }]
};
export const m_ApplicationsQueries = {
  FindByAppName: {
    AppName: "AppNameValue"
  },
  FindByAppNameArgs: [
        "AppName"
  ]
};

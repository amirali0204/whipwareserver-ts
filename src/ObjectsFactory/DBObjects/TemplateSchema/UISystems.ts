export const m_UISystems = {
  DVID: String,
  ScreenName: String,
  Type: String, // ListScreen, DetailScreen, Reporting, Dashboard
  EnterpriseID: String,
  AppID: String, // list of all appID it will be allowed This is ACL done
  Components: [{   // List of all components to display
    ComponentName: String,
    Relation: [{// These users, Groups and Roles can be given any above mentioned Relation
      Name: String,
      Users: [String],
      Groups: [String],
      Roles: [String],
      AppIDs: [String],
      EnterpriseID: String
    }],
    Attributes: [{
      AttributesName: String,
      Relation: [{// These users, Groups and Roles can be given any above mentioned Relation
        Name: String,
        Users: [String],
        Groups: [String],
        Roles: [String],
        AppIDs: [String],
        EnterpriseID: String
      }]
    }]
  }],
};
export const m_UISystemsQueries = {
  FindByScreenName: {
    ScreenName: "ScreenNameValue"
  },
  FindByScreenNameArgs: [
        "ScreenName"
  ]
};

export const m_Functions = {
  DVID: String,
  FunctionName: String,
  Type: String, // graphQL, Websocket
  EnterpriseID: String,
  AppID: [String], // list of all appID it will be allowed This is ACL done
  Relation: [{// These users, Groups and Roles can be given any above mentioned Relation
    Name: String,
    Users: [String],
    Groups: [String],
    Roles: [String],
    AppIDs: [String],
    EnterpriseID: String
  }]
};
export const m_FunctionsQueries = {
  FindByFunctionName: {
    FunctionName: "FunctionNameValue"
  },
  FindByFunctionNameArgs: [
        "FunctionName"
  ]
};

export const m_Groups = {
    DVID: String, // will be manadatory for all collections
    EnterpriseID: String,
    Users: [String], // Admin , B2B, B2C
    Groups: [String], // lifecycle of an User Object need to design in STM
    GroupName: String,
    Relation: [{// These users, Groups and Roles can be given any above mentioned Relation
        Name: String,
        Users: [String],
        Groups: [String],
        Roles: [String],
        AppIDs: [String],
        EnterpriseID: String
      }],
};
export const m_GroupsQueries = {
    FindByGroupName: {
        GroupName: "GroupNameValue"
    },
    FindByGroupNameArgs: [
          "GroupName"
    ]
};

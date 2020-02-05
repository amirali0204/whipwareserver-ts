export const m_Users = {
    DVID: String, // will be manadatory for all collections
    EnterpriseID: String,
    Role: [String], // Admin , B2B, B2C
    Groups: [String],
    State: String, // lifecycle of an User Object need to design in STM
    UserName: String,
    Password: String,
    FirstName: String,
    LastName: String,
    FullName: String,
    Relation: [{// These users, Groups and Roles can be given any above mentioned Relation
        Name: String,
        Users: [String],
        Groups: [String],
        Roles: [String],
        AppIDs: [String],
        EnterpriseID: String
      }]
};
export const m_UsersQueries = {
    FindByFirstName: {
          FirstName: "FirstNameValue"
    },
    FindByNameArgs: [
          "FirstName"
    ],
    FindByUserName: {
        UserName: "UserNameValue"
    },
    FindByUserNameArgs: ["UserName"]
};

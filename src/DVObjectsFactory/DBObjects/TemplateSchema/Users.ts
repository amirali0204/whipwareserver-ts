export const m_Users = {
    DVID: String, // will be manadatory for all collections
    EnterpriseID: String,
    Role: [String], // Admin , B2B, B2C
    Groups: [String],
    State: String, // lifecycle of an User Object need to design in STM
    UserName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    Password: String,
    FirstName: String,
    LastName: String,
    FullName: String,
    Tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
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
    FindByCred: {
        UserName: "UserNameValue",
    },
    FindByCredArgs: ["UserName"]
};

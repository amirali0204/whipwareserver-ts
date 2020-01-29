export const m_EnterpriseManagement = {
      DVID: String,
      EnterpriseName: String,
      Type: String, // Admin , B2B, B2C
      State: String // lifecycle of an Enterprise need to design in STM
};
export const m_EnterpriseManagementQueries = {
      FindByName: {
            EnterpriseName: "EnterpriseNameValue"
      },
      FindByNameArgs: [
            "EnterpriseName"
      ],
      FindByType: {
            Type: "TypeValue"
      },
      FindByTypeArgs: ["Type"]
};

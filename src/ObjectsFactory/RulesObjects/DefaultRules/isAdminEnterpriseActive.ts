export const m_isAdminEnterpriseActive = {
    conditions: {
        all: [{
          all: [{
            fact: "EnterpriseManagement",
            operator: "equal",
            value: "Active",
            path: "$.Response[0].State"
          }, {
            fact: "EnterpriseManagement",
            operator: "equal",
            value: "Admin",
            path: "$.Response[0].Type"
          }]
        }]
      },
      event: {  // define the event to fire when the conditions evaluate truthy
        type: "AdminEnterpriseExists",
        params: {
          message: "TRUE"
        }
      }
};

import {STMActions} from "../../../../DVActionsExecutor/STMActions/STMAction";
export const m_EnterpriseManagement = {
        id: "EnterpriseManagement",
        initial: "Actions",
        states: {
          Actions: {
                on: {
                    CREATE: {
                      target: "created",
                      actions: ["CreateEnterprise"]
                    },
                    UPDATE: {
                      target: "updated",
                      actions: ["UpdateEnterprise"]
                    },
                    DELETE: {
                      target: "deleted",
                      actions: ["DeleteEnterprise"]
                    },
                    FIND: {
                      target: "fetch"
                    },
                    FindByName: {
                      target: "fetch"
                    },
                    FindByType: {
                      target: "fetch"
                    }
                }
            },
            fetch: {
              invoke: {
                id: "getEnterprise",
                src: async (context, event) => await STMActions.ExecuteAction("EnterpriseManagement", context, event, "DBAction", "")
                ,
                onDone: {
                  target: "fetched"
                //  actions: assign({ user: (context, event) => event.data })
                },
                onError: {
                  target: "fetched"
                //  actions: assign({ error: (context, event) => event.data })
               }
              }
            },
            created: {
                type: "final"
            },
            updated: {
              type: "final"
            },
            deleted: {
                type: "final"
            },
            fetched: {
              type: "final"
            }
        },
      };
export const  m_EnterpriseManagementActions =  {
    actions: {
      // action implementations
      CreateEnterprise:  (context, event) => {
        STMActions.ExecuteAction("EnterpriseManagement", context, event, "DBAction", "");
      },
      UpdateEnterprise : (context, event) => {
        STMActions.ExecuteAction("EnterpriseManagement", context, event, "DBAction", "");
      },
      DeleteEnterprise : (context, event) => {
        STMActions.ExecuteAction("EnterpriseManagement", context, event, "DBAction", "");
      },
      FindEnterprise : (context, event) => {
        STMActions.ExecuteAction("EnterpriseManagement", context, event, "DBAction", "");
      },
      FindEnterpriseByName : (context, event) => {
        STMActions.ExecuteAction("EnterpriseManagement", context, event, "DBAction", "");
      }

    }
};

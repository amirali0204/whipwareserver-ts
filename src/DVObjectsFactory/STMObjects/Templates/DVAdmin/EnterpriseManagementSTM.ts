import {STMActions} from "../../../../DVActionsExecutor/STMActions/STMAction";
export const m_EnterpriseManagement = {
  id: "EnterpriseManagement",
  initial: "Actions",
  states: {
    Actions: {
          on: {
              CREATE: {
                target: "created"
              },
              UPDATE: {
                target: "updated"
              },
              DELETE: {
                target: "deleted"
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
          },
          onError: {
            target: "fetched"
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

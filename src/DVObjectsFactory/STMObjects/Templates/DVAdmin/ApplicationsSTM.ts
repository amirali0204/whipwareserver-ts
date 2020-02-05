import {STMActions} from "../../../../DVActionsExecutor/STMActions/STMAction";
export const m_Applications = {
  id: "Applications",
  initial: "Actions",
  states: {
    Actions: {
          on: {
              CREATE: {
                target: "created",
                actions: ["CreateApplication"]
              },
              UPDATE: {
                target: "updated",
                actions: ["UpdateApplication"]
              },
              DELETE: {
                target: "deleted",
                actions: ["DeleteApplication"]
              },
              FIND: {
                target: "fetch"
              },
              FindByName: {
                target: "fetch"
              }
          }
      },
      fetch: {
        invoke: {
          id: "getApplications",
          src: async (context, event) => await STMActions.ExecuteAction("Applications", context, event, "DBAction", "")
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

import {STMActions} from "../../../../DVActionsExecutor/STMActions/STMAction";
export const m_Functions = {
  id: "Functions",
  initial: "Actions",
  states: {
    Actions: {
          on: {
              CREATE: {
                target: "created",
                actions: ["CreateFunction"]
              },
              UPDATE: {
                target: "updated",
                actions: ["UpdateFunction"]
              },
              DELETE: {
                target: "deleted",
                actions: ["DeleteFunction"]
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
          id: "getFunctions",
          src: async (context, event) => await STMActions.ExecuteAction("Functions", context, event, "DBAction", "")
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

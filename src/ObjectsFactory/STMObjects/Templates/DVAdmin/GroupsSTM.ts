import {STMActions} from "../../../../ActionsExecutor/STMActions/STMAction";
export const m_Groups = {
  id: "Groups",
  initial: "Actions",
  states: {
    Actions: {
          on: {
              CREATE: {
                target: "created",
                actions: ["CreateGroup"]
              },
              UPDATE: {
                target: "updated",
                actions: ["UpdateGroup"]
              },
              DELETE: {
                target: "deleted",
                actions: ["DeleteGroup"]
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
          id: "getGroups",
          src: async (context, event) => await STMActions.ExecuteAction("Groups", context, event, "DBAction", "")
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

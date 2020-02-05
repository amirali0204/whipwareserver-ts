import {STMActions} from "../../../../DVActionsExecutor/STMActions/STMAction";
export const m_Users = {
  id: "Users",
  initial: "Actions",
  states: {
    Actions: {
          on: {
              CREATE: {
                target: "created",
                actions: ["CreateUser"]
              },
              UPDATE: {
                target: "updated",
                actions: ["UpdateUser"]
              },
              DELETE: {
                target: "deleted",
                actions: ["DeleteUser"]
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
          id: "getUsers",
          src: async (context, event) => await STMActions.ExecuteAction("Users", context, event, "DBAction", "")
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

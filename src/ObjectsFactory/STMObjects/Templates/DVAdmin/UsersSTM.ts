import {STMActions} from "../../../../ActionsExecutor/STMActions/STMAction";
export const m_Users = {
  id: "Users",
  initial: "Actions",
  states: {
    Actions: {
          on: {
              CREATE: {
                target: "created",
              },
              UPDATE: {
                target: "updated",
              },
              DELETE: {
                target: "deleted",
              },
              FIND: {
                target: "fetch"
              },
              FindByCred: "fetch"
          }
      },

      fetch: {
        invoke: {
          id: "fetch",
          src: async (context, event) => await STMActions.ExecuteAction("Users", context, event, "DBAction", "")
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
  }
};

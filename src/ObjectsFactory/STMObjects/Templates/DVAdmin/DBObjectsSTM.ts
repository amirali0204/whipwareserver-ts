import {STMActions} from "../../../../ActionsExecutor/STMActions/STMAction";
export const m_DBObjects = {
  id: "DBObjects",
  initial: "Actions",
  states: {
    Actions: {
          on: {
              CREATE: {
                target: "created",
                actions: ["CreateDBObject"]
              },
              UPDATE: {
                target: "updated",
                actions: ["UpdateDBObject"]
              },
              DELETE: {
                target: "deleted",
                actions: ["DeleteDBObject"]
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
          id: "getDBObjects",
          src: async (context, event) => await STMActions.ExecuteAction("DBObjects", context, event, "DBAction", "")
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

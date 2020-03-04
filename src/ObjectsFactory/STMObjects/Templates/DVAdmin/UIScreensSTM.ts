import {STMActions} from "../../../../ActionsExecutor/STMActions/STMAction";
export const m_UIScreens = {
  id: "UIScreens",
  initial: "Actions",
  states: {
    Actions: {
          on: {
              CREATE: {
                target: "created",
                actions: ["CreateUIScreen"]
              },
              UPDATE: {
                target: "updated",
                actions: ["UpdateUIScreen"]
              },
              DELETE: {
                target: "deleted",
                actions: ["DeleteUIScreen"]
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
          id: "getUIScreens",
          src: async (context, event) => await STMActions.ExecuteAction("UIScreens", context, event, "DBAction", ""),
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

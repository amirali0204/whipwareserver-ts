import {STMActions} from "../../../DVActionsExecutor/STMActions/STMAction";
export const m_FunctionLauncher = {
        id: "FunctionLauncher",
        initial: "InputValidator",
        states: {
          InputValidator: {
              on: {
                Launch: "LaunchSTM"
              }
          },
          LaunchSTM: {
            invoke: {
                id: "LaunchSTM",
                src: async (context, event) => {context = await STMActions.ExecuteAction("EnterpriseManagement", context, event, "STMAction", "");
                                                console.log(context);
                },
                onDone: {
                  target: "executed"
                },
                onError: {
                  target: "executed"
               }
              }
          },
          executed: {
            type: "final"
          }
        }
    };

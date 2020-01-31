import {STMActions} from "../../../DVActionsExecutor/STMActions/STMAction";
export const m_FunctionLauncher = {
        id: "FunctionLauncher",
        initial: "InputValidator",
        states: {
          InputValidator: {
              on: {
                Launch: "prepareInput"
              }
          },
          prepareInput: {
            invoke: {
              id: "prepareInput",
              src: async (context, event) =>  await STMActions.ExecuteAction("PrepareInput", context, event, "LibAction", ""),
              onDone: {
                target: "LaunchSTM"
              },
              onError: {
                target: "LaunchSTM"
             }
            }
          },
          LaunchSTM: {
            invoke: {
                id: "LaunchSTM",
                src: async (context, event) => {
                  await STMActions.ExecuteAction(context.ExecutorFunction, context[context.ExecutorFunction], event, "STMAction", "");
                  console.log(context);
                },
                onDone: {
                  target: "outputValidator"
                },
                onError: {
                  target: "executed"
               }
              }
          },
          executed: {
            type: "final"
          },
          InputValidationFailed: {
            type: "final"
          },
          outputValidator: {
            type: "final"
          }
        }
    };

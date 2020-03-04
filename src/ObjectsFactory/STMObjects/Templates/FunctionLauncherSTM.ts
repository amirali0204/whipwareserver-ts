import {STMActions} from "../../../ActionsExecutor/STMActions/STMAction";
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
                target: "Failed"
             }
            }
          },
          LaunchSTM: {
            invoke: {
                id: "LaunchSTM",
                src: async (context, event) => {
                  console.log(context.ExecutorFunction + " thiiiiiiiffff " + context[context.ExecutorFunction] + " " + JSON.stringify(event));
                  await STMActions.ExecuteAction(context.ExecutorFunction, context[context.ExecutorFunction], event, "STMAction", "");
                },
                onDone: {
                  target: "prepareOuput"
                },
                onError: {
                  target: "Failed"
               }
              }
          },
          prepareOuput: {
            invoke: {
              id: "prepareOuput",
              src: async (context, event) => {
                await STMActions.ExecuteAction("PrepareOuput", context, event, "LibAction", "");
                console.log(context);
            },
              onDone: {
                target: "executed"
              },
              onError: {
                target: "Failed"
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
          },
          Failed: {
            type: "final"
          }
        }
    };

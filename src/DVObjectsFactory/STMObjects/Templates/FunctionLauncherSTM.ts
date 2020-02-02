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
                target: "Failed"
             }
            }
          },
          LaunchSTM: {
            invoke: {
                id: "LaunchSTM",
                src: async (context, event) => {
                  await STMActions.ExecuteAction(context.ExecutorFunction, context[context.ExecutorFunction], event, "STMAction", "");
//                  console.log("This was the output of the execution ------>");
//                  console.log(context);
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
//                console.log("This is the before prepared output");
//                console.log(context);
                await STMActions.ExecuteAction("PrepareOuput", context, event, "LibAction", "");
//                console.log("This is the prepared output");
//                console.log(context);
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

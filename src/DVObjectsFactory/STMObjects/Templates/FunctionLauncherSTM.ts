import {STMActions} from "../../../DVActionsExecutor/STMActions/STMAction";
export const m_FunctionLauncher = {
        id: "FunctionLauncher",
        initial: "InputValidator",
        states: {
          InputValidator: {
              on: {
                Launch: "validateInput"
              }
          },
          validateInput: {
            invoke: {
              id: "validateInput",
              src: async (context, event) => {context = await STMActions.ExecuteAction("ValidateInput", context, event, "LibAction", "");
                                              console.log(context);
              },
              onDone: {
                target: "AuthenticateIdentity"
              },
              onError: {
                target: "InputValidationFailed"
             }
            }
          },
          AuthenticateIdentity: {
            on: {
              "": "LaunchSTM"
            }
        },
          LaunchSTM: {
            invoke: {
                id: "LaunchSTM",
                src: async (context, event) => {context = await STMActions.ExecuteAction(context.FunctionID, context, event, "STMAction", "");
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
            on: {
              "": "executed"
            }
          }
        }
    };

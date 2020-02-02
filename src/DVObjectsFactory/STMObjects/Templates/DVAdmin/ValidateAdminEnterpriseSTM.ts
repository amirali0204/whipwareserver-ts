import {STMActions} from "../../../../DVActionsExecutor/STMActions/STMAction";
export const m_ValidateAdminEnterprise = {
        id: "ValidateAdminEnterprise",
        initial: "AdminEnterpriseValidator",
        context: {},
        states: {
            AdminEnterpriseValidator: {
              on: {
                Validate: "loadEnterprise"
              }
          },
          loadEnterprise: {
            invoke: {
              id: "loadEnterprise",
              src: async (context, event) => {
                context.ExecutorFunction = "EnterpriseManagement";
                context.ExecutorAction = "FindByType";
                await STMActions.ExecuteAction("FunctionLauncher", context, {}, "STMActionLauncher", "");
                context.ExecutorFunction = "ValidateAdminEnterprise";
                context.ExecutorAction = "Validate";
              }, onDone: {
                target: "executed"
              },
              onError: {
                target: "executed"
             }
            }
          },
          DecisionAdmin: {
            invoke: {
                id: "DecisionAdmin",
                src: async (context, event) => {
                    context = await STMActions.ExecuteAction("isAdminEnterpriseActive", context, event, "RulesAction", "");
                },
                onDone: [{
                  target: "executed",
                  cond: (context, event) => context.isAdminEnterpriseActive.Response === "TRUE"
                }, {
                  target: "CreateAdminEnterprise",
                  cond: (context, event) => context.isAdminEnterpriseActive.Response === "FALSE"
                }],
                onError: {
                  target: "executed"
               }
              }
          },
          executed: {
            type: "final"
          },
          outputValidator: {
            type: "final"
          },
          CreateAdminEnterprise: {
            type: "final"
          }
        }

    };

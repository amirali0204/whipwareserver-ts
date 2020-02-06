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
                target: "DecisionAdmin"
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
                  context.ExecutorFunction = "isAdminEnterpriseActive";
                  context = await STMActions.ExecuteAction("isAdminEnterpriseActive", context, event, "RulesAction", "");
                  context.ExecutorFunction = "ValidateAdminEnterprise";
                },
                onDone: [{
                  target: "executed",
                  cond: (context, event) => context.isAdminEnterpriseActive.Response.Decision === "TRUE"
                }, {
                  target: "CreateDefaultSystem",
                  cond: (context, event) => context.isAdminEnterpriseActive.Response.Decision === "FALSE"
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
          CreateDefaultSystem: {
            invoke: {
              id: "CreateDefaultSystem",
              src: async (context, event) => {
                context.ExecutorFunction = "DefaultSystem";
                context.ExecutorAction = "CREATE";
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
          }
        }

    };

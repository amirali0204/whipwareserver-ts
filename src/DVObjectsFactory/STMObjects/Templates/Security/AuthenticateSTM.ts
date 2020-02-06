import {STMActions} from "../../../../DVActionsExecutor/STMActions/STMAction";
export const m_Authenticate = {
  id: "Authenticate",
  initial: "Authenticate",
  context: {},
  states: {
      Authenticate: {
        on: {
          Login: "Login"
        }
    },
    ConvertPass: {
      invoke: {
        id: "ConvertPass",
        src: async (context, event) => {
          await STMActions.ExecuteAction("ConvertPassword", context, event, "LibAction", "");
        },
        onDone: {
          target: "Login"
        },
        onError: {
          target: "executed"
        }
      }
    },
    Login: {
      invoke: {
        id: "Login",
        src: async (context, event) => {
          context.ExecutorFunction = "Users";
          context.ExecutorAction = "FindByCred";
          await STMActions.ExecuteAction("FunctionLauncher", context, {}, "STMActionLauncher", "");
          context.ExecutorFunction = "Authenticate";
          context.ExecutorAction = "Login";
        }, onDone: {
          target: "PasswordCompare"
        },
        onError: {
          target: "executed"
        }
      }
    },
    PasswordCompare: {
      invoke: {
        id: "PasswordCompare",
        src: async (context, event) => {
          await STMActions.ExecuteAction("ComparePassword", context, event, "LibAction", "");
        },
        onDone: {
          target: "executed"
        },
        onError: {
          target: "executed"
        }
      }
    },
    GenerateToken: {
      invoke: {
        id: "GenerateToken",
        src: async (context, event) => {
          await STMActions.ExecuteAction("GenerateAuthToken", context, event, "LibAction", "");
        },
        onDone: {
          target: "StoreTokens"
        },
        onError: {
          target: "executed"
        }
      }
    },
    StoreTokens: {
      invoke: {
        id: "StoreTokens",
        src: async (context, event) => {
          context.ExecutorFunction = "Users";
          context.ExecutorAction = "StoreTokens";
          await STMActions.ExecuteAction("FunctionLauncher", context, {}, "STMActionLauncher", "");
          context.ExecutorFunction = "Authenticate";
          context.ExecutorAction = "Login";
        },
        onDone: {
          target: "StoreTokens"
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

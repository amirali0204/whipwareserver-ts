"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const STMAction_1 = require("../../../../ActionsExecutor/STMActions/STMAction");
exports.m_Authenticate = {
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
                src: (context, event) => __awaiter(void 0, void 0, void 0, function* () {
                    yield STMAction_1.STMActions.ExecuteAction("ConvertPassword", context, event, "LibAction", "");
                }),
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
                src: (context, event) => __awaiter(void 0, void 0, void 0, function* () {
                    context.ExecutorFunction = "Users";
                    context.ExecutorAction = "FindByCred";
                    yield STMAction_1.STMActions.ExecuteAction("FunctionLauncher", context, {}, "STMActionLauncher", "");
                    context.ExecutorFunction = "Authenticate";
                    context.ExecutorAction = "Login";
                }), onDone: {
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
                src: (context, event) => __awaiter(void 0, void 0, void 0, function* () {
                    yield STMAction_1.STMActions.ExecuteAction("ComparePassword", context, event, "LibAction", "");
                }),
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
                src: (context, event) => __awaiter(void 0, void 0, void 0, function* () {
                    yield STMAction_1.STMActions.ExecuteAction("GenerateAuthToken", context, event, "LibAction", "");
                }),
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
                src: (context, event) => __awaiter(void 0, void 0, void 0, function* () {
                    context.ExecutorFunction = "Users";
                    context.ExecutorAction = "StoreTokens";
                    yield STMAction_1.STMActions.ExecuteAction("FunctionLauncher", context, {}, "STMActionLauncher", "");
                    context.ExecutorFunction = "Authenticate";
                    context.ExecutorAction = "Login";
                }),
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
//# sourceMappingURL=AuthenticateSTM.js.map
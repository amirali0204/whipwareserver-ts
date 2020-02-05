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
const STMAction_1 = require("../../../../DVActionsExecutor/STMActions/STMAction");
exports.m_ValidateAdminEnterprise = {
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
                src: (context, event) => __awaiter(void 0, void 0, void 0, function* () {
                    context.ExecutorFunction = "EnterpriseManagement";
                    context.ExecutorAction = "FindByType";
                    yield STMAction_1.STMActions.ExecuteAction("FunctionLauncher", context, {}, "STMActionLauncher", "");
                    context.ExecutorFunction = "ValidateAdminEnterprise";
                    context.ExecutorAction = "Validate";
                }), onDone: {
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
                src: (context, event) => __awaiter(void 0, void 0, void 0, function* () {
                    context.ExecutorFunction = "isAdminEnterpriseActive";
                    context = yield STMAction_1.STMActions.ExecuteAction("isAdminEnterpriseActive", context, event, "RulesAction", "");
                    context.ExecutorFunction = "ValidateAdminEnterprise";
                }),
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
                src: (context, event) => __awaiter(void 0, void 0, void 0, function* () {
                    context.ExecutorFunction = "DefaultSystem";
                    context.ExecutorAction = "CREATE";
                    yield STMAction_1.STMActions.ExecuteAction("FunctionLauncher", context, {}, "STMActionLauncher", "");
                    context.ExecutorFunction = "ValidateAdminEnterprise";
                    context.ExecutorAction = "Validate";
                }), onDone: {
                    target: "executed"
                },
                onError: {
                    target: "executed"
                }
            }
        }
    }
};
//# sourceMappingURL=ValidateAdminEnterpriseSTM.js.map
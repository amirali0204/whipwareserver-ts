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
                }), onDone: {
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
                src: (context, event) => __awaiter(void 0, void 0, void 0, function* () {
                    context = yield STMAction_1.STMActions.ExecuteAction("isAdminEnterpriseActive", context, event, "RulesAction", "");
                }),
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
//# sourceMappingURL=ValidateAdminEnterpriseSTM.js.map
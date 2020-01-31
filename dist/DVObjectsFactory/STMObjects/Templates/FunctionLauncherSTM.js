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
const STMAction_1 = require("../../../DVActionsExecutor/STMActions/STMAction");
exports.m_FunctionLauncher = {
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
                src: (context, event) => __awaiter(void 0, void 0, void 0, function* () { return yield STMAction_1.STMActions.ExecuteAction("PrepareInput", context, event, "LibAction", ""); }),
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
                src: (context, event) => __awaiter(void 0, void 0, void 0, function* () {
                    yield STMAction_1.STMActions.ExecuteAction(context.ExecutorFunction, context[context.ExecutorFunction], event, "STMAction", "");
                    console.log(context);
                }),
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
//# sourceMappingURL=FunctionLauncherSTM.js.map
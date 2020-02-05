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
exports.m_UIScreens = {
    id: "UIScreens",
    initial: "Actions",
    states: {
        Actions: {
            on: {
                CREATE: {
                    target: "created",
                    actions: ["CreateUIScreen"]
                },
                UPDATE: {
                    target: "updated",
                    actions: ["UpdateUIScreen"]
                },
                DELETE: {
                    target: "deleted",
                    actions: ["DeleteUIScreen"]
                },
                FIND: {
                    target: "fetch"
                },
                FindByName: {
                    target: "fetch"
                },
                FindByType: {
                    target: "fetch"
                }
            }
        },
        fetch: {
            invoke: {
                id: "getUIScreens",
                src: (context, event) => __awaiter(void 0, void 0, void 0, function* () { return yield STMAction_1.STMActions.ExecuteAction("UIScreens", context, event, "DBAction", ""); }),
                onDone: {
                    target: "fetched"
                },
                onError: {
                    target: "fetched"
                }
            }
        },
        created: {
            type: "final"
        },
        updated: {
            type: "final"
        },
        deleted: {
            type: "final"
        },
        fetched: {
            type: "final"
        }
    },
};
//# sourceMappingURL=UIScreensSTM.js.map
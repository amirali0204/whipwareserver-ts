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
exports.m_EnterpriseManagement = {
    id: "EnterpriseManagement",
    initial: "Actions",
    states: {
        Actions: {
            on: {
                CREATE: {
                    target: "created",
                    actions: ["CreateEnterprise"]
                },
                UPDATE: {
                    target: "updated",
                    actions: ["UpdateEnterprise"]
                },
                DELETE: {
                    target: "deleted",
                    actions: ["DeleteEnterprise"]
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
                id: "getUser",
                src: (context, event) => __awaiter(void 0, void 0, void 0, function* () {
                    context = yield STMAction_1.STMActions.ExecuteAction("EnterpriseManagement", context, event, "DBAction", "");
                    console.log("Loaded- " + context);
                }),
                onDone: {
                    target: "fetched"
                    //  actions: assign({ user: (context, event) => event.data })
                },
                onError: {
                    target: "fetched"
                    //  actions: assign({ error: (context, event) => event.data })
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
exports.m_EnterpriseManagementActions = {
    actions: {
        // action implementations
        CreateEnterprise: (context, event) => {
            STMAction_1.STMActions.ExecuteAction("EnterpriseManagement", context, event, "DBAction", "");
        },
        UpdateEnterprise: (context, event) => {
            STMAction_1.STMActions.ExecuteAction("EnterpriseManagement", context, event, "DBAction", "");
        },
        DeleteEnterprise: (context, event) => {
            STMAction_1.STMActions.ExecuteAction("EnterpriseManagement", context, event, "DBAction", "");
        },
        FindEnterprise: (context, event) => {
            STMAction_1.STMActions.ExecuteAction("EnterpriseManagement", context, event, "DBAction", "");
        },
        FindEnterpriseByName: (context, event) => {
            STMAction_1.STMActions.ExecuteAction("EnterpriseManagement", context, event, "DBAction", "");
        }
    }
};
//# sourceMappingURL=EnterpriseManagementSTM.js.map
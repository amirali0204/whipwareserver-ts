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
exports.m_AdminEnterprise = {
    id: "AdminEnterprise",
    initial: "Actions",
    states: {
        Actions: {
            on: {
                CREATE: {
                    target: "created"
                },
                UPDATE: {
                    target: "updated"
                },
                DELETE: {
                    target: "deleted"
                },
                FIND: {
                    target: "fetch"
                }
            }
        },
        create: {
            invoke: {
                id: "createAdminEnterprise",
                src: (context, event) => __awaiter(void 0, void 0, void 0, function* () {
                    yield STMAction_1.STMActions.ExecuteAction("EnterpriseManagement", context, event, "DBAction", "");
                }),
                onDone: {
                    target: "fetched"
                },
                onError: {
                    target: "fetched"
                }
            }
        },
        fetch: {
            invoke: {
                id: "getAdminEnterprise",
                src: (context, event) => __awaiter(void 0, void 0, void 0, function* () { return yield STMAction_1.STMActions.ExecuteAction("EnterpriseManagement", context, event, "DBAction", ""); }),
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
//# sourceMappingURL=AdminEnterpriseSTM.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const STMAction_1 = require("../../../../DVActionsDecorator/STMActions/STMAction");
exports.m_firstSTM = {
    id: "promise",
    initial: "initialized",
    context: { a: "ss" },
    states: {
        pending: {
            on: {
                RESOLVE: "resolved",
                REJECT: "rejected"
            }
        },
        initialized: {
            on: {
                Save: { target: "resolved",
                    actions: ["activate", "sendTelemetry"]
                }
            }
        },
        resolved: {
            type: "final"
        },
        rejected: {
            type: "final"
        }
    },
};
exports.m_firstSTMActions = {
    actions: {
        // action implementations
        activate: (context, event) => {
            STMAction_1.STMActions.ExecuteAction("firstSTM", context, event, "DBAction");
        },
        notifyActive: (context, event) => {
            // console.log("active!");
        },
        notifyInactive: (context, event) => {
            //  console.log("inactive!");
        },
        sendTelemetry: (context, event) => {
            // console.log("time:", Date.now());
        }
    }
};
//# sourceMappingURL=FirstSTM.js.map
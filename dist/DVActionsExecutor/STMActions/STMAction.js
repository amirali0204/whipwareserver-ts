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
const xstate_1 = require("xstate");
const STMActionCreator_1 = require("../../DVObjectsFactory/STMObjects/STMActionCreator");
const STMObjectCreator_1 = require("../../DVObjectsFactory/STMObjects/STMObjectCreator");
const ActionInvoker_1 = require("../ActionInvoker");
const DBActions_1 = require("../DBActions/DBActions");
const LibActions_1 = require("../LibraryActions/LibActions");
const RulesAction_1 = require("../RulesActions/RulesAction");
class STMActions {
    constructor(m_function, action, Input) {
        this.Function = m_function;
        this.Action = action;
        this.InputObject = Input;
    }
    static ExecuteAction(m_Function, context, event, actionType, m_STMAction) {
        return __awaiter(this, void 0, void 0, function* () {
            const actionInvoker = new ActionInvoker_1.ActionInvoker();
            const obj = JSON.parse(JSON.stringify(event));
            const dvobj = "DVObject";
            const dvob = "DVOBJ";
            const act = "Action";
            const resp = "Response";
            const req = "Request";
            const temp2 = "FunctionID";
            const exefunc = "ExecutorFunction";
            const exeact = "ExecutorAction";
            console.log("Event Occured - " + context[exefunc] + " of type - " + actionType + " for Function - " + context[exeact]);
            console.log("object context - " + JSON.stringify(context));
            if (actionType === "DBAction") {
                console.log(context);
                console.log(context[act]);
                const m_DBActions = new DBActions_1.DBActions(context[req][act], context[req][dvobj][dvob], m_Function);
                actionInvoker.setAction(m_DBActions);
                context[resp] = yield actionInvoker.doInvokeAction();
            }
            else if (actionType === "STMAction") {
                const m_STMActions = new STMActions(context[exefunc], context[exeact], context);
                actionInvoker.setAction(m_STMActions);
                yield actionInvoker.doInvokeAction();
            }
            else if (actionType === "STMActionLauncher") {
                const m_STMActions = new STMActions("FunctionLauncher", "Launch", context);
                actionInvoker.setAction(m_STMActions);
                yield actionInvoker.doInvokeAction();
            }
            else if (actionType === "RulesAction") {
                const resp = "Response";
                const m_RulesActions = new RulesAction_1.RulesAction(context[exefunc], context[[req][act]], context[exefunc]);
                actionInvoker.setAction(m_RulesActions);
                context[resp] = yield actionInvoker.doInvokeAction();
            }
            else if (actionType === "LibAction") {
                const m_RulesActions = new LibActions_1.LibAction(context[exefunc] + context[exeact], context, m_Function, context[exeact], context[exefunc]);
                actionInvoker.setAction(m_RulesActions);
                context[context[exefunc]] = yield actionInvoker.doInvokeAction();
                console.log(context);
            }
            return context;
        });
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            //     console.log(`StateMachine Execution for Function:(${this.Function})`);
            //     console.log(`StateMachine Execution with Action:(${this.Action})`);
            //    console.log(`StateMachine Execution for Input:(${JSON.stringify(this.InputObject)})`);
            let DVObjectsFactory;
            DVObjectsFactory = new STMObjectCreator_1.STMObjectCreator(this.Function);
            const dvMachine = DVObjectsFactory.createObject();
            const DVObjectsFactory2 = new STMActionCreator_1.STMActionCreator(this.Function + "Actions");
            const dvMachineActions = DVObjectsFactory2.createObject();
            const stm = xstate_1.Machine(dvMachine, dvMachineActions);
            const machine = stm.withContext(this.InputObject);
            yield new Promise((resolve, reject) => {
                const promiseService = xstate_1.interpret(machine).onTransition((context) => {
                    //        console.log(context.value);
                    if (context.done) {
                        resolve();
                    }
                });
                promiseService.start();
                console.log(promiseService.initialState.nextEvents);
                promiseService.send(this.Action);
            });
            // this.OutputObject = { response: "result from machine"};
            console.log(`StateMachine Executed for Function:(${this.Function})`);
            return this.InputObject;
        });
    }
}
exports.STMActions = STMActions;
//# sourceMappingURL=STMAction.js.map
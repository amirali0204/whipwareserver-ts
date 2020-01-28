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
class STMActions {
    constructor(m_function, action, Input) {
        this.Function = m_function;
        this.Action = action;
        this.InputObject = Input;
    }
    static ExecuteAction(m_Function, context, event, actionType) {
        return __awaiter(this, void 0, void 0, function* () {
            const actionInvoker = new ActionInvoker_1.ActionInvoker();
            const obj = JSON.parse(JSON.stringify(event));
            console.log("Event Occured - " + obj.type + " of type - " + actionType + " for Function - " + m_Function);
            console.log("object context - " + JSON.stringify(context));
            // create dbaction and invoke
            if (actionType === "DBAction") {
                const m_DBActions = new DBActions_1.DBActions(obj.type, context, m_Function);
                actionInvoker.setAction(m_DBActions);
                context = yield actionInvoker.doInvokeAction();
            }
            return context;
        });
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`StateMachine Execution for Function:(${this.Function})`);
            let DVObjectsFactory;
            DVObjectsFactory = new STMObjectCreator_1.STMObjectCreator(this.Function);
            const dvMachine = DVObjectsFactory.createObject();
            const DVObjectsFactory2 = new STMActionCreator_1.STMActionCreator(this.Function + "Actions");
            const dvMachineActions = DVObjectsFactory2.createObject();
            const stm = xstate_1.Machine(dvMachine, dvMachineActions);
            const machine = stm.withContext(this.InputObject);
            const promise = new Promise((resolve, reject) => {
            });
            const promiseService = xstate_1.interpret(machine).onTransition((context) => {
                console.log(context.context);
                // console.log("Completed the execution rettttt");
            }); // .onTransition((state) => console.log(state.value));
            promiseService.start();
            console.log(promiseService.initialState.nextEvents);
            promiseService.send(this.Action);
            yield new Promise((resolve, reject) => setTimeout(resolve, 500));
            this.OutputObject = { response: "result from machine" };
            console.log(`StateMachine Executed for Function:(${this.Function})`);
            return this.InputObject;
        });
    }
}
exports.STMActions = STMActions;
//# sourceMappingURL=STMAction.js.map
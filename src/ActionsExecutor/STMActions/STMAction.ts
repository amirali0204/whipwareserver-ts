import { interpret , Machine} from "xstate";
import {ObjectCreator} from "../../ObjectsFactory/ObjectCreator";
import { STMActionCreator } from "../../ObjectsFactory/STMObjects/STMActionCreator";
import {STMObjectCreator} from "../../ObjectsFactory/STMObjects/STMObjectCreator";
import {ActionInterface} from "../ActionInterface";
import { ActionInvoker } from "../ActionInvoker";
import {DBActions} from "../DBActions/DBActions";
import {LibAction} from "../LibraryActions/LibActions";
import { RulesAction } from "../RulesActions/RulesAction";

export class STMActions implements ActionInterface {
    public static async ExecuteAction(m_Function: string, context: object, event: object, actionType: string, m_STMAction: string): Promise<object | undefined> {
        const actionInvoker = new ActionInvoker();
        const obj = JSON.parse(JSON.stringify(event));
        const dvobj = "DVObject";
        const dvob = "DVOBJ";
        const act = "Action";
        const resp = "Response";
        const req = "Request";
        const exefunc = "ExecutorFunction";
        const exeact = "ExecutorAction";
        console.log("Event Occured - " + context[exefunc] + " of type - " + actionType + " for Function - " + context[exeact]);
        console.log("object context - " + JSON.stringify(context) );

        if (actionType === "DBAction") {
            const m_DBActions = new DBActions(context[req][act], context[req][dvobj][dvob], m_Function);
            actionInvoker.setAction(m_DBActions);
            context[resp] = await actionInvoker.doInvokeAction();
        } else if (actionType === "STMAction") {
            console.log("thhhhh");
            const m_STMActions = new STMActions(context[exefunc], context[exeact], context);
            actionInvoker.setAction(m_STMActions);
            await actionInvoker.doInvokeAction();
        } else if (actionType === "STMActionLauncher") {
            console.log("STM Launcher called for " + JSON.stringify(context));
            const m_STMActions = new STMActions("FunctionLauncher", "Launch", context);
            actionInvoker.setAction(m_STMActions);
            await actionInvoker.doInvokeAction();
        } else if (actionType === "RulesAction") {
            const resp = "Response";
            const m_RulesActions = new RulesAction(context[exefunc], context, context[exefunc]);
            actionInvoker.setAction(m_RulesActions);
            context[context[exefunc]] = {};
            context[context[exefunc]][resp] = await actionInvoker.doInvokeAction();
        } else if (actionType === "LibAction") {
            console.log("This is the Lib Action - " + context[exefunc] + " " + m_Function);
            const m_RulesActions = new LibAction(context[exefunc] + context[exeact], context, m_Function, context[exeact], context[exefunc]);
            actionInvoker.setAction(m_RulesActions);
            context[context[exefunc]] = await actionInvoker.doInvokeAction();
            console.log("Res This is the Lib Action - " + context[exefunc] + " " + m_Function);
        }
        return context;
    }

    private Function: string;
    private Action: string;
    private InputObject: Object;
    constructor(m_function: string, action: string, Input: Object) {
        this.Function = m_function;
        this.Action = action;
        this.InputObject = Input;
    }
    public async execute(): Promise<object | undefined> {
        console.log(`StateMachine Execution for Function:(${this.Function})`);
        console.log(`StateMachine Execution with Action:(${this.Action})`);
        console.log(`StateMachine Execution for Input:(${JSON.stringify(this.InputObject)})`);
        let DVObjectsFactory: ObjectCreator;
        DVObjectsFactory = new STMObjectCreator(this.Function);
        const dvMachine = DVObjectsFactory.createObject();
        const stm = Machine(dvMachine);
        const machine = stm.withContext(this.InputObject);
        await new Promise((resolve, reject) => {
            const promiseService = interpret(machine).onTransition((context) => {
                    if (context.done) {
                        resolve();
                    }
                }
            );
            promiseService.start();
            console.log(promiseService.initialState.nextEvents);
            promiseService.send(this.Action);
        });
        console.log(`StateMachine Executed for Function:(${this.Function})`);
        // This is the place to build the output response to the upper layer and drop all other data
        const response = "Response";
        console.log("STM Ended this was the input ---- for function " + this.Function);
        console.log(this.InputObject);
        return this.InputObject; // [this.Function][response];
    }
}

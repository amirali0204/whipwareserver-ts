import { interpret , Machine} from "xstate";
import {DVObjectCreator} from "../../DVObjectsFactory/DVObjectCreator";
import { STMActionCreator } from "../../DVObjectsFactory/STMObjects/STMActionCreator";
import {STMObjectCreator} from "../../DVObjectsFactory/STMObjects/STMObjectCreator";
import {ActionInterface} from "../ActionInterface";
import { ActionInvoker } from "../ActionInvoker";
import {DBActions} from "../DBActions/DBActions";
import { RulesAction } from "../RulesActions/RulesAction";

export class STMActions implements ActionInterface {
    public static async ExecuteAction(m_Function: string, context: object, event: object, actionType: string, m_STMAction: string): Promise<object | undefined> {
        const actionInvoker = new ActionInvoker();
        const obj = JSON.parse(JSON.stringify(event));

        console.log("Event Occured - " + obj.type + " of type - " + actionType + " for Function - " + m_Function);
        console.log("object context - " + JSON.stringify(context) );

        if (actionType === "DBAction") {
            const m_DBActions = new DBActions(obj.type, context, m_Function);
            actionInvoker.setAction(m_DBActions);
            context[m_Function] = await actionInvoker.doInvokeAction();
        } else if (actionType === "STMAction") {
            const m_STMActions = new STMActions(obj.type, m_STMAction, m_Function); // Action to be defined here
            actionInvoker.setAction(m_STMActions);
            context[m_Function] = await actionInvoker.doInvokeAction();
        } else if (actionType === "RulesAction") {
            const m_RulesActions = new RulesAction(obj.type, context, m_Function);
            actionInvoker.setAction(m_RulesActions);
            const rulename = "isLoggedIn";
            context[rulename] = await actionInvoker.doInvokeAction();
        }
        return context;
    }

    private Function: string;
    private Action: string;
    private InputObject: Object;
    private OutputObject: Object;
    constructor(m_function: string, action: string, Input: Object) {
        this.Function = m_function;
        this.Action = action;
        this.InputObject = Input;
    }
    public async execute(): Promise<object | undefined> {
        console.log(`StateMachine Execution for Function:(${this.Function})`);
        let DVObjectsFactory: DVObjectCreator;
        DVObjectsFactory = new STMObjectCreator(this.Function);
        const dvMachine = DVObjectsFactory.createObject();

        const DVObjectsFactory2 = new STMActionCreator(this.Function + "Actions");
        const dvMachineActions = DVObjectsFactory2.createObject();
        const stm = Machine(dvMachine, dvMachineActions  );
        const machine = stm.withContext(this.InputObject);
        await new Promise((resolve, reject) => {
            const promiseService = interpret(machine).onTransition((context) => {
                    console.log(context.value);
                    if (context.done) {
                        resolve();
                    }
                }
            );
            promiseService.start();
            console.log(promiseService.initialState.nextEvents);
            promiseService.send(this.Action);
        });
        this.OutputObject = { response: "result from machine"};
        console.log(`StateMachine Executed for Function:(${this.Function})`);
        return this.InputObject;
    }
}

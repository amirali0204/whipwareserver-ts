import { interpret , Machine} from "xstate";
import {DVObjectCreator} from "../../DVObjectsFactory/DVObjectCreator";
import { STMActionCreator } from "../../DVObjectsFactory/STMObjects/STMActionCreator";
import {STMObjectCreator} from "../../DVObjectsFactory/STMObjects/STMObjectCreator";
import {ActionInterface} from "../ActionInterface";
import { ActionInvoker } from "../ActionInvoker";
import {DBActions} from "../DBActions/DBActions";
import {LibAction} from "../LibraryActions/LibActions";
import { RulesAction } from "../RulesActions/RulesAction";

export class STMActions implements ActionInterface {
    public static async ExecuteAction(m_Function: string, context: object, event: object, actionType: string, m_STMAction: string): Promise<object | undefined> {
        const actionInvoker = new ActionInvoker();
        const obj = JSON.parse(JSON.stringify(event));

        console.log("Event Occured - " + obj.type + " of type - " + actionType + " for Function - " + m_Function);
        console.log("object context - " + JSON.stringify(context) );

        if (actionType === "DBAction") {
            const dvobj = "DVObject";
            const dvob = "DVOBJ";
            const m_DBActions = new DBActions(obj.type, context[dvobj][dvob], m_Function);
            actionInvoker.setAction(m_DBActions);
            context[m_Function] = await actionInvoker.doInvokeAction();
        } else if (actionType === "STMAction") {
            const action = "Action";
            const m_STMActions = new STMActions(m_Function, context[action], context);
            actionInvoker.setAction(m_STMActions);
            await actionInvoker.doInvokeAction();
        } else if (actionType === "RulesAction") {
            const m_RulesActions = new RulesAction(obj.type, context, m_Function);
            actionInvoker.setAction(m_RulesActions);
            context[m_Function] = await actionInvoker.doInvokeAction();
        } else if (actionType === "LibAction") {
            const m_RulesActions = new LibAction(obj.type, context, m_Function);
            actionInvoker.setAction(m_RulesActions);
            context[m_Function] = await actionInvoker.doInvokeAction();
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
    //    console.log(`StateMachine Execution for Function:(${this.Function})`);
    //    console.log(`StateMachine Execution with Action:(${this.Action})`);
    //    console.log(`StateMachine Execution for Input:(${JSON.stringify(this.InputObject)})`);
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
       // this.OutputObject = { response: "result from machine"};
        console.log(`StateMachine Executed for Function:(${this.Function})`);
        return this.InputObject;
    }
}

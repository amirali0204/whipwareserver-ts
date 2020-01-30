import { ActionObjectCreator } from "../../DVObjectsFactory/ActionObjects/ActionObjectCreator";
import { DVObjectCreator } from "../../DVObjectsFactory/DVObjectCreator";
import {ActionInterface} from "../ActionInterface";
export class LibAction implements ActionInterface {
    private Function: string;
    private Action: string;
    private InputObject: Object;
    private OutputObject: Object;
    constructor( action: string, context: object, m_function: string) {
        this.Function = m_function;
        this.Action = action;
        this.InputObject = context;
    }
    public async execute(): Promise<object | undefined> {
        console.log(`StateMachine Execution for Function:(${this.Function})`);
        console.log(`StateMachine Execution with Action:(${this.Action})`);
        console.log(`StateMachine Execution for Input:(${JSON.stringify(this.InputObject)})`);
        let DVObjectsFactory: DVObjectCreator;
        DVObjectsFactory = new ActionObjectCreator(this.Function);
        let dbObject = {};
        dbObject = DVObjectsFactory.createObject();

        return this.OutputObject;
    }

}

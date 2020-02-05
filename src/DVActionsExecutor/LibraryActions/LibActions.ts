import { DVObjectCreator } from "../../DVObjectsFactory/DVObjectCreator";
import { ActionObjectCreator } from "../../DVObjectsFactory/LibActionObjects/ActionObjectCreator";
import {ActionInterface} from "../ActionInterface";
import {ActionStrategy} from "./ActionStrategy";
import { InputPreparer } from "./Data/InputPreparer";
import { OutputPreparer } from "./Data/OutputPreparer";
export class LibAction implements ActionInterface {
    private LibFunction: string;
    private DVFunction: string;
    private InputObject: Object;
    private Target: string;
    private TargetFunc: string;
    constructor( action: string, context: object, m_function: string, target: string, targetfunc: string) {
        this.LibFunction = m_function;
        this.DVFunction = action;
        this.Target = target;
        this.InputObject = context;
        this.TargetFunc = targetfunc;
    }
    public async execute(): Promise<object | undefined> {
    //    console.log(`LibAction Execution for Function:(${this.LibFunction})`);
    //    console.log(`LibAction Execution with Action:(${this.DVFunction})`);
    //    console.log(`LibAction Execution for Input:(${JSON.stringify(this.InputObject)})`);
        if (this.LibFunction === "PrepareInput") {
            let DVObjectsFactory: DVObjectCreator;
            DVObjectsFactory = new ActionObjectCreator(this.DVFunction);
            let dbObject = {};
            dbObject = DVObjectsFactory.createObject();
    //        console.log("This is the Libaction Prepare Input following DB object - ");
    //        console.log(dbObject);
            const context = new ActionStrategy(new InputPreparer(dbObject, this.InputObject));
            const objectret =  context.LibraryAction();
            const exefunc = "ExecutorFunction";
            const exeact = "ExecutorAction";
            objectret[exefunc] = this.TargetFunc;
            objectret[exeact] = this.Target;
            return objectret;
        } else if (this.LibFunction === "PrepareOuput") {
            console.log("This is PrepareOuput for function =----- " + this.DVFunction + "Resp");
            console.log(this.InputObject);

            let DVObjectsFactory: DVObjectCreator;
            DVObjectsFactory = new ActionObjectCreator(this.DVFunction + "Resp");
            let dbObject = {};
            dbObject = DVObjectsFactory.createObject();
            const context = new ActionStrategy(new OutputPreparer(dbObject, this.InputObject));
            const objectret =  context.LibraryAction();
            const exefunc = "ExecutorFunction";
            const exeact = "ExecutorAction";
            objectret[exefunc] = this.TargetFunc;
            objectret[exeact] = this.Target;
            return objectret;
        } else {
            return new Object();
        }
    }

}

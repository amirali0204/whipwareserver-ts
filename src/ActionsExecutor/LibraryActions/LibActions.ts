import { ActionObjectCreator } from "../../ObjectsFactory/LibActionObjects/ActionObjectCreator";
import { ObjectCreator } from "../../ObjectsFactory/ObjectCreator";
import {ActionInterface} from "../ActionInterface";
import {ActionStrategy} from "./ActionStrategy";
import { InputPreparer } from "./Data/InputPreparer";
import { OutputPreparer } from "./Data/OutputPreparer";
import { PasswordConvertor } from "./Security/PasswordConvertor";
export class LibAction implements ActionInterface {
    private LibFunction: string;
    private Function: string;
    private InputObject: Object;
    private Target: string;
    private TargetFunc: string;
    constructor( action: string, context: object, m_function: string, target: string, targetfunc: string) {
        this.LibFunction = m_function;
        this.Function = action;
        this.Target = target;
        this.InputObject = context;
        this.TargetFunc = targetfunc;
    }
    public async execute(): Promise<object | undefined> {
        if (this.LibFunction === "PrepareInput") {
            let ObjectsFactory: ObjectCreator;
            ObjectsFactory = new ActionObjectCreator(this.Function);
            let dbObject = {};
            dbObject = ObjectsFactory.createObject();
            const context = new ActionStrategy(new InputPreparer(dbObject, this.InputObject));
            const objectret =  context.LibraryAction();
            const exefunc = "ExecutorFunction";
            const exeact = "ExecutorAction";
            objectret[exefunc] = this.TargetFunc;
            objectret[exeact] = this.Target;
            return objectret;
        } else if (this.LibFunction === "PrepareOuput") {
            console.log("This is PrepareOuput for function =----- " + this.Function + "Resp");
            console.log(this.InputObject);

            let ObjectsFactory: ObjectCreator;
            ObjectsFactory = new ActionObjectCreator(this.Function + "Resp");
            let dbObject = {};
            dbObject = ObjectsFactory.createObject();
            const context = new ActionStrategy(new OutputPreparer(dbObject, this.InputObject));
            const objectret =  context.LibraryAction();
            const exefunc = "ExecutorFunction";
            const exeact = "ExecutorAction";
            objectret[exefunc] = this.TargetFunc;
            objectret[exeact] = this.Target;
            return objectret;
        } else if (this.LibFunction === "ConvertPassword") {
            console.log("This is ConvertPassword for function =----- " + this.Function + "Resp");
            console.log(this.InputObject);
            const context = new ActionStrategy(new PasswordConvertor(this.InputObject));
            const objectret =  await context.LibraryAction();
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

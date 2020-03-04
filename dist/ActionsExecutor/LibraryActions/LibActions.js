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
const ActionObjectCreator_1 = require("../../ObjectsFactory/LibActionObjects/ActionObjectCreator");
const ActionStrategy_1 = require("./ActionStrategy");
const InputPreparer_1 = require("./Data/InputPreparer");
const OutputPreparer_1 = require("./Data/OutputPreparer");
const PasswordConvertor_1 = require("./Security/PasswordConvertor");
class LibAction {
    constructor(action, context, m_function, target, targetfunc) {
        this.LibFunction = m_function;
        this.Function = action;
        this.Target = target;
        this.InputObject = context;
        this.TargetFunc = targetfunc;
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.LibFunction === "PrepareInput") {
                let ObjectsFactory;
                ObjectsFactory = new ActionObjectCreator_1.ActionObjectCreator(this.Function);
                let dbObject = {};
                dbObject = ObjectsFactory.createObject();
                const context = new ActionStrategy_1.ActionStrategy(new InputPreparer_1.InputPreparer(dbObject, this.InputObject));
                const objectret = context.LibraryAction();
                const exefunc = "ExecutorFunction";
                const exeact = "ExecutorAction";
                objectret[exefunc] = this.TargetFunc;
                objectret[exeact] = this.Target;
                return objectret;
            }
            else if (this.LibFunction === "PrepareOuput") {
                console.log("This is PrepareOuput for function =----- " + this.Function + "Resp");
                console.log(this.InputObject);
                let ObjectsFactory;
                ObjectsFactory = new ActionObjectCreator_1.ActionObjectCreator(this.Function + "Resp");
                let dbObject = {};
                dbObject = ObjectsFactory.createObject();
                const context = new ActionStrategy_1.ActionStrategy(new OutputPreparer_1.OutputPreparer(dbObject, this.InputObject));
                const objectret = context.LibraryAction();
                const exefunc = "ExecutorFunction";
                const exeact = "ExecutorAction";
                objectret[exefunc] = this.TargetFunc;
                objectret[exeact] = this.Target;
                return objectret;
            }
            else if (this.LibFunction === "ConvertPassword") {
                console.log("This is ConvertPassword for function =----- " + this.Function + "Resp");
                console.log(this.InputObject);
                const context = new ActionStrategy_1.ActionStrategy(new PasswordConvertor_1.PasswordConvertor(this.InputObject));
                const objectret = yield context.LibraryAction();
                const exefunc = "ExecutorFunction";
                const exeact = "ExecutorAction";
                objectret[exefunc] = this.TargetFunc;
                objectret[exeact] = this.Target;
                return objectret;
            }
            else {
                return new Object();
            }
        });
    }
}
exports.LibAction = LibAction;
//# sourceMappingURL=LibActions.js.map
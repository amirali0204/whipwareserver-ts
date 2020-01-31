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
const ActionObjectCreator_1 = require("../../DVObjectsFactory/ActionObjects/ActionObjectCreator");
const ActionStrategy_1 = require("./ActionStrategy");
const InputPreparer_1 = require("./Data/InputPreparer");
class LibAction {
    constructor(action, context, m_function, target, targetfunc) {
        this.LibFunction = m_function;
        this.DVFunction = action;
        this.Target = target;
        this.InputObject = context;
        this.TargetFunc = targetfunc;
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            //    console.log(`LibAction Execution for Function:(${this.LibFunction})`);
            //    console.log(`LibAction Execution with Action:(${this.DVFunction})`);
            //    console.log(`LibAction Execution for Input:(${JSON.stringify(this.InputObject)})`);
            if (this.LibFunction === "PrepareInput") {
                let DVObjectsFactory;
                DVObjectsFactory = new ActionObjectCreator_1.ActionObjectCreator(this.DVFunction);
                let dbObject = {};
                dbObject = DVObjectsFactory.createObject();
                //        console.log("This is the Libaction Prepare Input following DB object - ");
                //        console.log(dbObject);
                const context = new ActionStrategy_1.ActionStrategy(new InputPreparer_1.InputPreparer(dbObject, this.InputObject));
                const objectret = context.LibraryAction();
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
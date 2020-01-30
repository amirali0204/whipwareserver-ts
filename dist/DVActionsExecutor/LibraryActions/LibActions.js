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
class LibAction {
    constructor(action, context, m_function) {
        this.Function = m_function;
        this.Action = action;
        this.InputObject = context;
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`StateMachine Execution for Function:(${this.Function})`);
            console.log(`StateMachine Execution with Action:(${this.Action})`);
            console.log(`StateMachine Execution for Input:(${JSON.stringify(this.InputObject)})`);
            let DVObjectsFactory;
            DVObjectsFactory = new ActionObjectCreator_1.ActionObjectCreator(this.Function);
            let dbObject = {};
            dbObject = DVObjectsFactory.createObject();
            return this.OutputObject;
        });
    }
}
exports.LibAction = LibAction;
//# sourceMappingURL=LibActions.js.map
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
const json_rules_engine_1 = require("json-rules-engine");
const RulesObjectsCreator_1 = require("../../DVObjectsFactory/RulesObjects/RulesObjectsCreator");
class RulesAction {
    constructor(action, Input, c_function) {
        this.InputObject = {};
        this.SysAction = action;
        this.InputObject = Input;
        this.m_Function = c_function;
        this.OutputObject = { Response: "FALSE" };
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`RulesAction: (${this.SysAction}) for the function : (${this.m_Function})`);
            let DVObjectsFactory;
            DVObjectsFactory = new RulesObjectsCreator_1.RulesObjectCreator(this.m_Function);
            const RuleObject = DVObjectsFactory.createObject();
            const rules = new json_rules_engine_1.Rule(JSON.stringify(RuleObject));
            const engine = new json_rules_engine_1.Engine();
            engine.addRule(rules);
            //   //  build facts from Input Data
            //     engine.addFact("Enterprise", (params, almanac) => {
            //         return almanac.factValue("EnterpriseManagement")
            //           .then((Enterprises) => {
            //             const objstr = JSON.stringify(Enterprises[0]);
            //             const objj = JSON.parse(objstr);
            //             return objj;
            //           });
            //       });
            const factstr = JSON.stringify(this.InputObject);
            const facts = JSON.parse(factstr);
            // This was a huge blunder
            yield new Promise((resolve, reject) => {
                engine
                    .run(facts)
                    .then((results) => {
                    // 'results' is an object containing successful events, and an Almanac instance containing facts
                    results.events.map((event) => {
                        console.log("Rules Action returned - " + JSON.stringify(event.params.message));
                        this.OutputObject = { Response: event.params.message };
                        console.log(this.OutputObject);
                    });
                    resolve();
                }).catch((err) => console.log(err.stack));
            });
            return this.OutputObject;
        });
    }
}
exports.RulesAction = RulesAction;
//# sourceMappingURL=RulesAction.js.map
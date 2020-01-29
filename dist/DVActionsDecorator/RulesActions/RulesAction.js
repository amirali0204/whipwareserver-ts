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
        const dvid = "DVID";
        this.identifier = Input[dvid];
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`RulesAction: (${this.SysAction}) for the function : (${this.m_Function})`);
            //   console.log("Input Data- " + JSON.stringify(this.InputObject));
            let DVObjectsFactory;
            DVObjectsFactory = new RulesObjectsCreator_1.RulesObjectCreator("isLoggedIn");
            const RuleObject = DVObjectsFactory.createObject();
            const rules = new json_rules_engine_1.Rule(JSON.stringify(RuleObject));
            const engine = new json_rules_engine_1.Engine();
            engine.addRule(rules);
            //  console.log("Rules Engine with Rule loaded - " + JSON.stringify(rules));
            const facts = {
                personalFoulCount: 6,
                gameDuration: 40
            };
            yield new Promise((resolve, reject) => {
                engine
                    .run(facts)
                    .then((results) => {
                    // 'results' is an object containing successful events, and an Almanac instance containing facts
                    results.events.map((event) => {
                        console.log(event.params.message);
                        this.OutputObject = event.params.message;
                    });
                    resolve();
                });
            });
            return this.OutputObject;
        });
    }
}
exports.RulesAction = RulesAction;
//# sourceMappingURL=RulesAction.js.map
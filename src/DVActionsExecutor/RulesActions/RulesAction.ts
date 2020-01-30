import { Engine, Rule, RuleProperties } from "json-rules-engine";
import {DVObjectCreator} from "../../DVObjectsFactory/DVObjectCreator";
import {RulesObjectCreator} from "../../DVObjectsFactory/RulesObjects/RulesObjectsCreator";
import { ActionInterface } from "../ActionInterface";
export class RulesAction implements ActionInterface {
    private SysAction: string; // Create , Delete , Update, Retrieve
    private InputObject = {};
    private OutputObject: object;
    private m_Function: string;

    constructor(action: string, Input: object, c_function: string) {
        this.SysAction = action;
        this.InputObject = Input;
        this.m_Function = c_function;
        this.OutputObject = {Response: "FALSE"};
    }
    public async execute(): Promise <object | undefined> {
        console.log(`RulesAction: (${this.SysAction}) for the function : (${this.m_Function})`);
        let DVObjectsFactory: DVObjectCreator;
        DVObjectsFactory = new RulesObjectCreator(this.m_Function);
        const RuleObject = DVObjectsFactory.createObject();
        const rules = new Rule(JSON.stringify(RuleObject));
        const engine = new Engine();
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
        await new Promise((resolve, reject) => {
        engine
            .run(facts)
            .then((results) => {
                // 'results' is an object containing successful events, and an Almanac instance containing facts
                results.events.map((event) => {
                    console.log("Rules Action returned - " + JSON.stringify(event.params.message));
                    this.OutputObject = {Response: event.params.message};
                    console.log(this.OutputObject);
                });
                resolve();
            }).catch((err) => console.log(err.stack));
        });
        return this.OutputObject;
    }
}

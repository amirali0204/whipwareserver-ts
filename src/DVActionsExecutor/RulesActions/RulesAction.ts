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
    }
    public async execute(): Promise <object | undefined> {
        console.log(`RulesAction: (${this.SysAction}) for the function : (${this.m_Function})`);
        let DVObjectsFactory: DVObjectCreator;
        DVObjectsFactory = new RulesObjectCreator("isLoggedIn");
        const RuleObject = DVObjectsFactory.createObject();
        const rules = new Rule(JSON.stringify(RuleObject));
        const engine = new Engine();
        engine.addRule(rules);
        // build facts from Input Data
        const facts = {
            personalFoulCount: 6,
            gameDuration: 40
        };
        await new Promise((resolve, reject) => {
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
    }
}

import {DVObjectInterface} from "../DVObjectInterface";
import {DVRules} from "./DefaultRules";
export class RulesObject implements DVObjectInterface {
    public RuleID: string;
    constructor(ID: string) {
        this.RuleID = ID;
    }
    public createObject(): object {
        return DVRules[this.RuleID];
    }
}

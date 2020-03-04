import {ObjectInterface} from "../ObjectInterface";
import {DVRules} from "./DefaultRules";
export class RulesObject implements ObjectInterface {
    public RuleID: string;
    constructor(ID: string) {
        this.RuleID = ID;
    }
    public createObject(): object {
        return DVRules[this.RuleID];
    }
}

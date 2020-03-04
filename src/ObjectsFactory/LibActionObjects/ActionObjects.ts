import {ObjectInterface} from "../ObjectInterface";
import {ActionObjects} from "./LibActionObjectTemplates";
export class ActionObject implements ObjectInterface {
    public objectID: string;
    constructor(ID: string) {
        this.objectID = ID;
    }
    public createObject(): object {
        return ActionObjects[this.objectID];
    }
}

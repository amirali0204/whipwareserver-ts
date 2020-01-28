import {DVObjectInterface} from "../DVObjectInterface";
import {DVStateActions} from "./Templates";
export class STMAction implements DVObjectInterface {
    public objectID: string;
    constructor(ID: string) {
        this.objectID = ID;
    }
    public createObject(): Object {
        // STM objects will be loaded from Template files or DB
        return DVStateActions[this.objectID];
    }
}

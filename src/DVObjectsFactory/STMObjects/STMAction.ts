import {DVObjectInterface} from "../DVObjectInterface";
export class STMAction implements DVObjectInterface {
    public objectID: string;
    constructor(ID: string) {
        this.objectID = ID;
    }
    public createObject(): Object {
        // STM objects will be loaded from Template files or DB
        return new Object(); // DVStateActions[this.objectID];
    }
}

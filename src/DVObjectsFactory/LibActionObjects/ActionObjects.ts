import {DVObjectInterface} from "../DVObjectInterface";
import {DVActionObjects} from "./LibActionObjectTemplates";
export class ActionObject implements DVObjectInterface {
    public objectID: string;
    constructor(ID: string) {
        this.objectID = ID;
    }
    public createObject(): object {
        return DVActionObjects[this.objectID];
    }
}

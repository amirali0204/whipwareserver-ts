import {DVObjectInterface} from "../DVObjectInterface";
import {DVObjects} from "./TemplateSchema";
export class DBObject implements DVObjectInterface {
    public objectID: string;
    constructor(ID: string) {
        this.objectID = ID;
    }
    public createObject(): object {
        return DVObjects[this.objectID];
    }
}

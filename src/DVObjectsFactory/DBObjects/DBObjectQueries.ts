import {DVObjectInterface} from "../DVObjectInterface";
import {DVObjectQueries} from "./TemplateSchema";
export class DBObjectQueries implements DVObjectInterface {
    public objectID: string;
    constructor(ID: string) {
        this.objectID = ID;
    }
    public createObject(): Object {
        // STM objects will be loaded from Template files or DB
        return DVObjectQueries[this.objectID];
    }
}

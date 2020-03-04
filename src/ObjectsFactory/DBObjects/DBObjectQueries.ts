import {ObjectInterface} from "../ObjectInterface";
import {ObjectQueries} from "./TemplateSchema";
export class DBObjectQueries implements ObjectInterface {
    public objectID: string;
    constructor(ID: string) {
        this.objectID = ID;
    }
    public createObject(): Object {
        // STM objects will be loaded from Template files or DB
        return ObjectQueries[this.objectID];
    }
}

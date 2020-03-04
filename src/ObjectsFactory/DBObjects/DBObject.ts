import {ObjectInterface} from "../ObjectInterface";
import {Objects} from "./TemplateSchema";
export class DBObject implements ObjectInterface {
    public objectID: string;
    constructor(ID: string) {
        this.objectID = ID;
    }
    public createObject(): object {
        return Objects[this.objectID];
    }
}

import { ObjectCreator } from "../ObjectCreator";
import { ObjectInterface } from "../ObjectInterface";
import {RulesObject} from "./RulesObject";
export class RulesObjectCreator extends ObjectCreator {
    public ID: string;
    constructor(objectid: string) {
        super();
        this.ID = objectid;
    }
    public factoryMethod(): ObjectInterface {
        return new RulesObject(this.ID);
    }
}

import { ObjectCreator } from "../ObjectCreator";
import { ObjectInterface } from "../ObjectInterface";
import {ActionObject} from "./ActionObjects";
export class ActionObjectCreator extends ObjectCreator {
    public ID: string;
    constructor(objectid: string) {
        super();
        this.ID = objectid;
    }
    public factoryMethod(): ObjectInterface {
        return new ActionObject(this.ID);
    }
}

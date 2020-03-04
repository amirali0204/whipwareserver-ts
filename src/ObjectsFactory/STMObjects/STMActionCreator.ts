import { ObjectCreator } from "../ObjectCreator";
import { ObjectInterface } from "../ObjectInterface";
import {STMAction} from "./STMAction";
export class STMActionCreator extends ObjectCreator {
    public ID: string;
    constructor(objectid: string) {
        super();
        this.ID = objectid;
    }
    public factoryMethod(): ObjectInterface {
        return new STMAction(this.ID);
    }
}

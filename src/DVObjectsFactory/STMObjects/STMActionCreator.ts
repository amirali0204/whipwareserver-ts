import { DVObjectCreator } from "../DVObjectCreator";
import { DVObjectInterface } from "../DVObjectInterface";
import {STMAction} from "./STMAction";
export class STMActionCreator extends DVObjectCreator {
    public ID: string;
    constructor(objectid: string) {
        super();
        this.ID = objectid;
    }
    public factoryMethod(): DVObjectInterface {
        return new STMAction(this.ID);
    }
}

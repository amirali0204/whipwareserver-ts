import { DVObjectCreator } from "../DVObjectCreator";
import { DVObjectInterface } from "../DVObjectInterface";
import {ActionObject} from "./ActionObjects";
export class ActionObjectCreator extends DVObjectCreator {
    public ID: string;
    constructor(objectid: string) {
        super();
        this.ID = objectid;
    }
    public factoryMethod(): DVObjectInterface {
        return new ActionObject(this.ID);
    }
}

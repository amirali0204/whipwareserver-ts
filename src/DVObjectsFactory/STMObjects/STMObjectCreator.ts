import { DVObjectCreator } from "../DVObjectCreator";
import { DVObjectInterface } from "../DVObjectInterface";
import {STMObject} from "./STMObject";
export class STMObjectCreator extends DVObjectCreator {
    public ID: string;
    constructor(objectid: string) {
        super();
        this.ID = objectid;
    }
    public factoryMethod(): DVObjectInterface {
        return new STMObject(this.ID);
    }
}

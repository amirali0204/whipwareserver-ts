import { DVObjectCreator } from "../DVObjectCreator";
import { DVObjectInterface } from "../DVObjectInterface";
import {RulesObject} from "./RulesObject";
export class RulesObjectCreator extends DVObjectCreator {
    public ID: string;
    constructor(objectid: string) {
        super();
        this.ID = objectid;
    }
    public factoryMethod(): DVObjectInterface {
        return new RulesObject(this.ID);
    }
}

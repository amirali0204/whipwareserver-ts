import { DVObjectCreator } from "../DVObjectCreator";
import { DVObjectInterface } from "../DVObjectInterface";
import {DBObject} from "./DBObject";
export class DBObjectCreator extends DVObjectCreator {
    public ID: string;
    public DVOBJ: object;
    constructor(objectid: string) {
        super();
        this.ID = objectid;
    }
    public factoryMethod(): DVObjectInterface {
        return new DBObject(this.ID);
    }
}

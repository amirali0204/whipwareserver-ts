import { ObjectCreator } from "../ObjectCreator";
import { ObjectInterface } from "../ObjectInterface";
import {DBObject} from "./DBObject";
export class DBObjectCreator extends ObjectCreator {
    public ID: string;
    public DVOBJ: object;
    constructor(objectid: string) {
        super();
        this.ID = objectid;
    }
    public factoryMethod(): ObjectInterface {
        return new DBObject(this.ID);
    }
}

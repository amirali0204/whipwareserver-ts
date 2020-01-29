import { DVObjectCreator } from "../DVObjectCreator";
import { DVObjectInterface } from "../DVObjectInterface";
import {DBObjectQueries} from "./DBObjectQueries";
export class DBObjectQueriesCreator extends DVObjectCreator {
    public ID: string;
    constructor(objectid: string) {
        super();
        this.ID = objectid;
    }
    public factoryMethod(): DVObjectInterface {
        return new DBObjectQueries(this.ID);
    }
}

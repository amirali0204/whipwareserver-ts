import { ObjectCreator } from "../ObjectCreator";
import { ObjectInterface } from "../ObjectInterface";
import {DBObjectQueries} from "./DBObjectQueries";
export class DBObjectQueriesCreator extends ObjectCreator {
    public ID: string;
    constructor(objectid: string) {
        super();
        this.ID = objectid;
    }
    public factoryMethod(): ObjectInterface {
        return new DBObjectQueries(this.ID);
    }
}

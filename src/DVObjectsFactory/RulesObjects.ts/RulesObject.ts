import {DVObjectInterface} from "../DVObjectInterface";
export class RulesObject implements DVObjectInterface {
    public objectID: string;
    constructor(ID: string) {
        this.objectID = ID;
    }
    public createObject(): object {
        console.log("Load DB object from DB");
        console.log("if it is templated object then return from file");
        console.log("return the Rules object instead of DB");
        return new Object();
    }
}

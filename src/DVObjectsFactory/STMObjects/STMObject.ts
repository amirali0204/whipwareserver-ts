import {DVObjectInterface} from "../DVObjectInterface";
import {DVStateMachines} from "./Templates/";
export class STMObject implements DVObjectInterface {
    public MachineID: string;
    constructor(ID: string) {
        this.MachineID = ID;
    }
    public createObject(): Object {
        // STM objects will be loaded from Template files or DB
        return DVStateMachines[this.MachineID];
    }
}

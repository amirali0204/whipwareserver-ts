import * as bcryptjs from "bcryptjs";
import {Strategy } from "../Strategy";
export class PasswordCompare implements Strategy {
    private context: object;
    private OutputObject: object;
    constructor(context: object) {
        this.context = context;
    }
    public async doAlgorithm(): Promise<object|undefined> {
        this.OutputObject = {};
        console.log("This is the Compare Password - ");
        console.log(this.context);
        const Response = "HashedPassword";
        const DVOBJ = "DVOBJ";
        const Request = "Request";
        const DVObject = "DVObject";
        const Password = "Password";
        this.context[Request][DVObject][DVOBJ][Password] = await bcryptjs.hash(this.context[Request][DVObject][DVOBJ][Password], 8);
        return this.OutputObject;
    }
}

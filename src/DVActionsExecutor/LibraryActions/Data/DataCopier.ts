import { ActionInterface } from "../../../DVActionsExecutor/ActionInterface";

export class DataCopier implements ActionInterface {
    private InputObject: object;
    constructor(input: object) {
        this.InputObject = input;
    }
    public async execute(): Promise <object|undefined> {
        return new Object();
    }
}

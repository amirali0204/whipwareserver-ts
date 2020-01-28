import {ActionInterface} from "./ActionInterface";
export class ActionInvoker {
    private Action: ActionInterface;
    /**
     * Initialize commands.
     */
    public setAction(command: ActionInterface): void {
        this.Action = command;
    }
    public async doInvokeAction(): Promise<object | undefined> {
        if (this.isCommand(this.Action)) {
           return await this.Action.execute();
        }
        return new Object();
    }
    private isCommand(object): object is ActionInterface {
        return object.execute !== undefined;
    }
}

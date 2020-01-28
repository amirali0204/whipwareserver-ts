import {ActionInterface} from "./ActionInterface";

export class ActionDecorator implements ActionInterface {
    protected Action: ActionInterface;

    constructor(action: ActionInterface) {
        this.Action = action;
    }

    /**
     * The Decorator delegates all work to the wrapped component.
     */
    public execute(): object {
        return this.Action.execute();
    }
}

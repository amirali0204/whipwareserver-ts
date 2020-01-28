import {ActionDecorator} from "../ActionDecorator";
export class DBActionOptionsDecorator extends ActionDecorator {
    /**
     * Decorators may call parent implementation of the operation, instead of
     * calling the wrapped object directly. This approach simplifies extension
     * of decorator classes.
     */
    public execute(): object {
        // decorate the Action here and then execute the parent
    //    if (super.sysAction() === "") {
            // fetch the options from the DB for this action and apply
     //   }
        return super.execute();
    }
}

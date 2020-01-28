import {ActionDecorator} from "../ActionDecorator";
export class DBActionFilterDecorator extends ActionDecorator {
    public execute(): object {
        // decorate the Action here and then execute the parent
        // if (super.sysAction() === "") {
            // fetch the filters and attach to the action from DB
       // }
        return super.execute();
    }
}

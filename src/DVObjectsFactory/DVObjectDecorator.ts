import {DVObjectInterface} from "./DVObjectInterface";
export class DVObjectDecorator implements DVObjectInterface {
    protected dvobject: DVObjectInterface;

    constructor(component: DVObjectInterface) {
        this.dvobject = component;
    }

    /**
     * The Decorator delegates all work to the wrapped component.
     */
    public createObject(): object {
        return this.dvobject.createObject();
    }
}

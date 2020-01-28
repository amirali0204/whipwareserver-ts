import {DVObjectInterface} from "./DVObjectInterface";
export abstract class DVObjectCreator {
    public abstract factoryMethod(): DVObjectInterface;
    public createObject(): object {
        const dvobject = this.factoryMethod();
        return dvobject.createObject();
    }
}

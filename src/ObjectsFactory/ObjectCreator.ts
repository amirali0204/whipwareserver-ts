import {ObjectInterface} from "./ObjectInterface";
export abstract class ObjectCreator {
    public abstract factoryMethod(): ObjectInterface;
    public createObject(): object {
        const dvobject = this.factoryMethod();
        return dvobject.createObject();
    }
}

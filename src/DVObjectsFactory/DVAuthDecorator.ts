import {DVObjectDecorator} from "./DVObjectDecorator";
/**
 * Concrete Decorators call the wrapped object and alter its result in some way.
 */
export class DVAuthDecorator extends DVObjectDecorator {
    /**
     * Decorators may call parent implementation of the operation, instead of
     * calling the wrapped object directly. This approach simplifies extension
     * of decorator classes.
     */
    public createObject(): object {
        return super.createObject();
    }
}

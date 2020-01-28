"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DVObjectDecorator_1 = require("./DVObjectDecorator");
/**
 * Concrete Decorators call the wrapped object and alter its result in some way.
 */
class DVAuthDecorator extends DVObjectDecorator_1.DVObjectDecorator {
    /**
     * Decorators may call parent implementation of the operation, instead of
     * calling the wrapped object directly. This approach simplifies extension
     * of decorator classes.
     */
    createObject() {
        return super.createObject();
    }
}
exports.DVAuthDecorator = DVAuthDecorator;
//# sourceMappingURL=DVAuthDecorator.js.map
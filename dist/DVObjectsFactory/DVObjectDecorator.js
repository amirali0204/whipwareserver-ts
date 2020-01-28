"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DVObjectDecorator {
    constructor(component) {
        this.dvobject = component;
    }
    /**
     * The Decorator delegates all work to the wrapped component.
     */
    createObject() {
        return this.dvobject.createObject();
    }
}
exports.DVObjectDecorator = DVObjectDecorator;
//# sourceMappingURL=DVObjectDecorator.js.map
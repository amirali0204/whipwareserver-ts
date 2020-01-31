"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ActionStrategy {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    LibraryAction() {
        const result = this.strategy.doAlgorithm();
        // console.log(result);
        return result;
    }
}
exports.ActionStrategy = ActionStrategy;
//# sourceMappingURL=ActionStrategy.js.map
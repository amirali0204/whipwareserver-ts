import { Strategy } from "./Strategy";
export class ActionStrategy {
    private strategy: Strategy;
    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }
    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }
    public LibraryAction(): object {
        const result = this.strategy.doAlgorithm();
       // console.log(result);
        return result;
    }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
class InputPreparer {
    constructor(input, context) {
        this.InputObject = input;
        this.context = context;
    }
    doAlgorithm() {
        const req = "Request";
        const dvobj = "DVObject";
        const dv = "DVOBJ";
        let vary = "ExecutorFunction";
        this.OutputObject = {};
        this.OutputObject[req] = {};
        let type = "FunctionID";
        this.OutputObject[req][dvobj] = {};
        this.OutputObject[req][dvobj][dv] = {};
        this.OutputObject[req][type] = this.context[vary];
        type = "Action";
        vary = "ExecutorAction";
        this.OutputObject[req][type] = this.context[vary];
        const validator = new class_validator_1.Validator();
        for (const inkey of Object.keys(this.InputObject)) {
            console.log(this.InputObject[inkey]);
            for (const valkey of Object.keys(this.InputObject[inkey])) {
                let success = 1;
                for (const datatypecheck of this.InputObject[inkey].dataType) {
                    const response = validator[datatypecheck](this.context[req][dvobj][dv][inkey]);
                    if (response === false) {
                        console.log("Validation failed");
                        success = 0;
                        break;
                    }
                }
                for (const datatypecheckkey of Object.keys(this.InputObject[inkey].doubleattribute)) {
                    const response = validator[datatypecheckkey](this.context[req][dvobj][dv][inkey], this.InputObject[inkey].doubleattribute[datatypecheckkey]);
                    if (response === false) {
                        console.log("Validation failed");
                        success = 0;
                        break;
                    }
                }
                if (success === 1) {
                    this.OutputObject[req][dvobj][dv][inkey] = this.context[req][dvobj][dv][inkey];
                }
            }
        }
        return this.OutputObject;
    }
}
exports.InputPreparer = InputPreparer;
//# sourceMappingURL=InputPreparer.js.map
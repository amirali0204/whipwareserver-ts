"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OutputPreparer {
    constructor(input, context) {
        this.InputObject = input;
        this.context = context;
    }
    doAlgorithm() {
        this.OutputObject = {};
        for (const inkey of Object.keys(this.InputObject)) {
            if (inkey.startsWith("OBJ_")) {
                this.handleObject(this.InputObject[inkey], inkey);
            }
            else {
                this.OutputObject[inkey] = this.context[inkey];
            }
        }
        return this.OutputObject;
    }
    handleObject(target, inkey) {
        const name = "__Name";
        const type = "__Type";
        const source = "__Source";
        const resp = "Response";
        if (target[type] === "Array") {
            this.OutputObject[resp] = [];
        }
        else {
            this.OutputObject[resp] = {};
        }
        let objective;
        for (const key of target[source]) {
            if (objective === undefined) {
                objective = this.context[key];
            }
            else {
                objective = objective[key];
            }
        }
        const arry = [];
        if (target[type] === "Array") {
            for (const item of objective) {
                const obj = {};
                for (const arraykey of Object.keys(target)) {
                    if (arraykey === name || arraykey === source || arraykey === type) {
                        continue;
                    }
                    if (arraykey.startsWith("OBJ_")) {
                        this.handleObject(target[arraykey], arraykey);
                    }
                    else {
                        obj[arraykey] = item[arraykey];
                    }
                }
                arry.push(obj);
            }
        }
        else {
            for (const item of objective) {
                for (const arraykey of Object.keys(target)) {
                    if (arraykey === name || arraykey === source || arraykey === type) {
                        continue;
                    }
                    if (arraykey.startsWith("OBJ_")) {
                        this.handleObject(target[arraykey], arraykey);
                    }
                    else {
                        this.OutputObject[resp][arraykey] = item[arraykey];
                    }
                }
            }
        }
        if (target[type] === "Array") {
            this.OutputObject[resp] = arry;
        }
    }
}
exports.OutputPreparer = OutputPreparer;
//# sourceMappingURL=OutputPreparer.js.map
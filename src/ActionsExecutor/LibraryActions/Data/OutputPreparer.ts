import e = require("express");
import {Strategy } from "../Strategy";
export class OutputPreparer implements Strategy {
    private InputObject: object;
    private context: object;
    private OutputObject: object;
    constructor(input: object, context: object) {
        this.InputObject = input;
        this.context = context;
    }
    public doAlgorithm(): object {
        this.OutputObject = {};
        console.log(this.context);
        console.log(this.InputObject);
        for (const inkey of Object.keys(this.InputObject)) {
            if (inkey.startsWith("OBJ_")) {
                this.handleObject(this.InputObject[inkey], inkey);
            } else {
                this.OutputObject[inkey] = this.context[inkey];
            }
        }
        console.log("This is prepared output for function - ");
        console.log(this.OutputObject);
        return this.OutputObject;
    }
    public handleObject(target: object, inkey: string) {
        const name = "__Name";
        const type = "__Type";
        const source = "__Source";
        const resp = "Response";
        if (target[type] === "Array") {
            this.OutputObject[resp] = [];
        } else {
            this.OutputObject[resp] = {};
        }
        let objective;
        for (const key of target[source]) {
            if (objective === undefined) {
                objective = this.context[key];
            } else {
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
                    } else {
                        obj[target[arraykey]] = item[arraykey];
                    }
                }
                arry.push(obj);
            }
        } else {
            for (const item of objective) {
                for (const arraykey of Object.keys(target)) {
                    if (arraykey === name || arraykey === source || arraykey === type) {
                        continue;
                    }
                    if (arraykey.startsWith("OBJ_")) {
                        this.handleObject(target[arraykey], arraykey);
                    } else {
                        this.OutputObject[resp][target[arraykey]] = item[arraykey];
                    }
                }
            }
        }
        if (target[type] === "Array") {
            this.OutputObject[resp] = arry;
        }
    }
}

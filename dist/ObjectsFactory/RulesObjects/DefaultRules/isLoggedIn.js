"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.m_isLoggedIn = {
    conditions: {
        any: [{
                all: [{
                        fact: "gameDuration",
                        operator: "equal",
                        value: 40
                    }, {
                        fact: "personalFoulCount",
                        operator: "greaterThanInclusive",
                        value: 5
                    }]
            }, {
                all: [{
                        fact: "gameDuration",
                        operator: "equal",
                        value: 48
                    }, {
                        fact: "personalFoulCount",
                        operator: "greaterThanInclusive",
                        value: 6
                    }]
            }]
    },
    event: {
        type: "fouledOut",
        params: {
            message: "Player has fouled out!"
        }
    }
};
//# sourceMappingURL=isLoggedIn.js.map
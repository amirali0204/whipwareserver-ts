"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class MongoSingleton {
    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    constructor() { }
    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    static getInstance() {
        if (!MongoSingleton.instance) {
            MongoSingleton.instance = new MongoSingleton();
            const options = {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                autoIndex: false,
                poolSize: 10,
                // If not connected, return errors immediately rather than waiting for reconnect
                bufferMaxEntries: 0,
                connectTimeoutMS: 10000,
                socketTimeoutMS: 45000,
            };
            MongoSingleton.instance.dbConnection = mongoose_1.createConnection("mongodb://myUserAdmin:DeskVantage321@localhost:27017/deskvantage?authSource=admin&w=1", options);
        }
        return MongoSingleton.instance;
    }
    /**
     * Finally, any singleton should define some business logic, which can be
     * executed on its instance.
     */
    getDBConnectionHandler() {
        return MongoSingleton.getInstance().dbConnection;
    }
}
exports.MongoSingleton = MongoSingleton;
//# sourceMappingURL=mongooseSingleton.js.map
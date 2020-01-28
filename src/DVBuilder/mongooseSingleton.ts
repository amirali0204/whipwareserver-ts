import { Connection, createConnection} from "mongoose";
export class MongoSingleton {

    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    public static getInstance(): MongoSingleton {
        if (!MongoSingleton.instance) {
            MongoSingleton.instance = new MongoSingleton();

            const options = {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true ,
                useFindAndModify: false,
                autoIndex: false, // Don't build indexes
                poolSize: 10, // Maintain up to 10 socket connections
                // If not connected, return errors immediately rather than waiting for reconnect
                bufferMaxEntries: 0,
                connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
                socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
            };
            MongoSingleton.instance.dbConnection = createConnection("mongodb://myUserAdmin:DeskVantage321@localhost:27017/deskvantage?authSource=admin&w=1", options);
        }
        return MongoSingleton.instance;
    }
    private static instance: MongoSingleton;
    private dbConnection: Connection;
    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() { }

    /**
     * Finally, any singleton should define some business logic, which can be
     * executed on its instance.
     */
    public getDBConnectionHandler(): Connection {
        return MongoSingleton.getInstance().dbConnection;
    }
}

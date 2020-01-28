"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
require("reflect-metadata");
const ServiceBuilder_1 = require("./DVBuilder/ServiceBuilder");
const DVFunctionSchema_1 = require("./DVFunctionsRouter/DVFunctionSchema");
// const tschema = new Schema({ name: String, size: String });
// const Tank = MongoSingleton.getInstance().getDBConnectionHandler().model("Tank", tschema);
// const small = new Tank({ size: "small" });
// small.save();
// const Tank2 = MongoSingleton.getInstance().getDBConnectionHandler().model("Tank", tschema);
// Tank2.find((error, result) => {console.log(JSON.stringify(result)); });
// const obj = {};
// const newobj = Object.defineProperties(obj, {
//   property1: {
//     value: true,
//     writable: true
//   },
//   property2: {
//     value: "Hello",
//     writable: true
//   }
//   // etc. etc.
// });
// Object.defineProperties(obj, {
//   property3: {
//     value: true,
//     writable: true
//   }
//   // etc. etc.
// });
// const temp = "property1";
// console.log(newobj[temp] );
// newobj.property2 = "help";
// console.log(newobj.property2);
function bootstrapGraph() {
    return __awaiter(this, void 0, void 0, function* () {
        const schema = yield DVFunctionSchema_1.dvSchemaHandler;
        // Create GraphQL server
        const server = new apollo_server_1.ApolloServer({
            schema,
            // enable GraphQL Playground
            playground: true,
        });
        // Start the server
        const { url } = yield server.listen(8080);
        console.log(`Server is running, GraphQL Playground available at ${url} `);
    });
}
// Build a local state machine for dv builder
// configure the system with enterprise DB
const dvBuilder = new ServiceBuilder_1.DVBuilder();
dvBuilder.validateAdminEnterprise();
// Admin system is configured now bootstrap the server for GraphAPI functions
bootstrapGraph();
// Web Socket to be initiated and initiated here for other services like Chat and Calling
// File Handler server also needs to be initiated here
// Email Server also needed to be initiated here
//# sourceMappingURL=dvserver.js.map
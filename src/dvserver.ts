import { ApolloServer } from "apollo-server";
import "reflect-metadata";
import { DVBuilder } from "./DVBuilder/ServiceBuilder";
import {dvSchemaHandler} from "./DVFunctionsRouter/DVFunctionSchema";

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

async function bootstrapGraph() {
    const schema =  await dvSchemaHandler;
    // Create GraphQL server
    const server = new ApolloServer({
        schema,
      // enable GraphQL Playground
      playground: true,
    });

    // Start the server
    const { url } =  await server.listen(8080);
    console.log(`Server is running, GraphQL Playground available at ${url} `);
 }

 // Build a local state machine for dv builder

// configure the system with enterprise DB
const dvBuilder = new DVBuilder();
dvBuilder.validateAdminEnterprise();
// Admin system is configured now bootstrap the server for GraphAPI functions
bootstrapGraph();
// Web Socket to be initiated and initiated here for other services like Chat and Calling

// File Handler server also needs to be initiated here

// Email Server also needed to be initiated here

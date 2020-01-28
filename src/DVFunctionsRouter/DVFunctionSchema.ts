import * as path from "path";
import { buildSchema } from "type-graphql";
import {DBObjectCreator} from "../DVObjectsFactory/DBObjects/DBObjectCreator";
import {FunctionResolver} from "./FunctionResolver";
import {DVObjectScalar} from "./FunctionScalarType";
// build TypeGraphQL executable schema
export const dvSchemaHandler = buildSchema({
    resolvers: [FunctionResolver],
    scalarsMap: [{ type: DBObjectCreator, scalar: DVObjectScalar }],
    // automatically create `schema.gql` file with schema definition in current folder
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });

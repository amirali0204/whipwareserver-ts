"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const type_graphql_1 = require("type-graphql");
const DBObjectCreator_1 = require("../ObjectsFactory/DBObjects/DBObjectCreator");
const FunctionResolver_1 = require("./FunctionResolver");
const FunctionScalarType_1 = require("./FunctionScalarType");
// build TypeGraphQL executable schema
exports.dvSchemaHandler = type_graphql_1.buildSchema({
    resolvers: [FunctionResolver_1.FunctionResolver],
    scalarsMap: [{ type: DBObjectCreator_1.DBObjectCreator, scalar: FunctionScalarType_1.DVObjectScalar }],
    // automatically create `schema.gql` file with schema definition in current folder
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
});
//# sourceMappingURL=FunctionSchema.js.map
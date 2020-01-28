"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const QueryResolver_1 = require("./QueryResolver");
const schema = type_graphql_1.buildSchema({
    resolvers: [QueryResolver_1.RecipeResolver, QueryResolver_1.RecipeResolver1]
});
exports.default = schema;
// Schema are the functions which will be implemented inside DB Function Table of all application of each enterprises
//# sourceMappingURL=QueryHandler.js.map
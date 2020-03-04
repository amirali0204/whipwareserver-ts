"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const FunctionScalar_1 = require("./FunctionScalar");
exports.DVObjectScalar = new graphql_1.GraphQLScalarType({
    name: "DVObjectScalar",
    description: "DV object scalar type",
    parseValue(value) {
        //   console.log("parseValue: " + value);
        let n_dvobject;
        n_dvobject = new FunctionScalar_1.FunctionScalar();
        n_dvobject.DVOBJ = { test: "test", temp: "temp" };
        return n_dvobject; // value from the client input variables
    },
    serialize(value) {
        //   console.log("serialize: " + value);
        return value; // value sent to the client
    },
    parseLiteral(ast) {
        if (ast.kind === graphql_1.Kind.OBJECT) {
            const n = ast.fields[0].loc.source.body.indexOf("dvObjectsdata");
            const lastn = ast.fields[0].loc.source.body.lastIndexOf(") {");
            //   console.log("data starts at " + n + " last index is " + lastn);
            const res = "({ " + ast.fields[0].loc.source.body.substring(n, lastn) + "})";
            //    console.log("extracted data = "  + res);
            const objj = eval(res); // this is dangerous needs to switch it to object creator from string code
            const jsonObject = JSON.parse(JSON.stringify(objj));
            //   console.log("JSON EnterpriseID - " + jsonObject.dvObjectsdata.EnterpriseID);
            //  console.log("values " + jsonObject);
            // console.log("values " + ast.fields[0].name.value);
            // console.log("values " + ast.fields[0].loc.startToken.value);
            // console.log("values " + ast.fields[0].loc.endToken.value);
            // console.log("values ---" + ast.fields[0].loc.source.body);
            // console.log("values " + ast.fields[1].name.value);
            // console.log("values " + ast.fields[1].loc.endToken.value);
            return jsonObject.dvObjectsdata.DVObject; // value from the client query
        }
        return null;
    },
});
//# sourceMappingURL=FunctionScalarType.js.map
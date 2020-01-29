"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
const type_graphql_1 = require("type-graphql");
const ActionInvoker_1 = require("../DVActionsExecutor/ActionInvoker");
const STMAction_1 = require("../DVActionsExecutor/STMActions/STMAction");
const FunctionInput_1 = require("./FunctionInput");
const FunctionObject_1 = require("./FunctionObject");
const FunctionScalar_1 = require("./FunctionScalar");
let FunctionResolver = class FunctionResolver {
    QueryRouter(Input) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(Input.EnterpriseID);
            console.log(Input.FunctionID);
            console.log(Input.Action);
            console.log(Input.ApplicationID);
            console.log(Input.Identity);
            console.log(Input.DVObject);
            console.log(Input.RequestID);
            console.log(Input.DVObject.DVOBJ);
            // Validate the Input here
            const DVRequest = {};
            let type = "FunctionID";
            DVRequest[type] = Input.FunctionID;
            type = "Action";
            DVRequest[type] = Input.Action;
            type = "DVObject";
            const type2 = "DVOBJ";
            DVRequest[type] = {};
            DVRequest[type][type2] = Input.DVObject.DVOBJ;
            type = "Action";
            DVRequest[type] = Input.Action;
            type = "Response";
            DVRequest[type] = {};
            const FunctionHandler = new STMAction_1.STMActions("FunctionLauncher", "Launch", DVRequest);
            const STMInvoker = new ActionInvoker_1.ActionInvoker();
            STMInvoker.setAction(FunctionHandler);
            const rec = new FunctionObject_1.FunctionObject();
            rec.DVObject = new FunctionScalar_1.FunctionScalar();
            rec.RequestID = Input.RequestID;
            rec.DVObject.DVOBJ = yield STMInvoker.doInvokeAction();
            // build response
            rec.DVObject.DVOBJ = rec.DVObject.DVOBJ[Input.FunctionID];
            //  console.log("Responsed to query function Data ---> " + JSON.stringify(rec.DVObject.DVOBJ));
            return rec;
        });
    }
    AtomicRouter(Input) {
        // Handles all Mutation Functions
        console.log(Input.EnterpriseID);
        console.log(Input.FunctionID);
        console.log(Input.ApplicationID);
        console.log(Input.Identity);
        console.log(Input.DVObject);
        console.log(Input.RequestID);
        console.log(Input.DVObject.DVOBJ);
        // execute statemachine launcher here and respond
        const rec = new FunctionObject_1.FunctionObject();
        rec.EnterpriseID = Input.EnterpriseID;
        rec.DVObject = new FunctionScalar_1.FunctionScalar();
        rec.RequestID = Input.RequestID;
        rec.DVObject.DVOBJ = { temp: "temp", test: "test" };
        return rec;
    }
};
__decorate([
    type_graphql_1.Query((returns) => FunctionObject_1.FunctionObject),
    __param(0, type_graphql_1.Arg("dvObjectsdata")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FunctionInput_1.FunctionInput]),
    __metadata("design:returntype", Promise)
], FunctionResolver.prototype, "QueryRouter", null);
__decorate([
    type_graphql_1.Mutation((returns) => FunctionObject_1.FunctionObject),
    __param(0, type_graphql_1.Arg("dvObjectsdata")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FunctionInput_1.FunctionInput]),
    __metadata("design:returntype", void 0)
], FunctionResolver.prototype, "AtomicRouter", null);
FunctionResolver = __decorate([
    type_graphql_1.Resolver((of) => FunctionObject_1.FunctionObject)
], FunctionResolver);
exports.FunctionResolver = FunctionResolver;
//# sourceMappingURL=FunctionResolver.js.map
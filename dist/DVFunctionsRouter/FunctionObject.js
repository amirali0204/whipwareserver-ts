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
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const FunctionScalar_1 = require("./FunctionScalar");
const FunctionScalarType_1 = require("./FunctionScalarType");
let FunctionObject = class FunctionObject {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], FunctionObject.prototype, "EnterpriseID", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], FunctionObject.prototype, "FunctionID", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], FunctionObject.prototype, "Action", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], FunctionObject.prototype, "Identity", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], FunctionObject.prototype, "ApplicationID", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], FunctionObject.prototype, "RequestID", void 0);
__decorate([
    type_graphql_1.Field((type) => FunctionScalarType_1.DVObjectScalar),
    __metadata("design:type", FunctionScalar_1.FunctionScalar)
], FunctionObject.prototype, "DVObject", void 0);
FunctionObject = __decorate([
    type_graphql_1.ObjectType({ description: "Object representing cooking recipe" })
], FunctionObject);
exports.FunctionObject = FunctionObject;
//# sourceMappingURL=FunctionObject.js.map
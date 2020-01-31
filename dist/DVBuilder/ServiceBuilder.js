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
const ActionInvoker_1 = require("../DVActionsExecutor/ActionInvoker");
const STMAction_1 = require("../DVActionsExecutor/STMActions/STMAction");
class DVBuilder {
    DVBuilder() { }
    validateAdminEnterprise() {
        return __awaiter(this, void 0, void 0, function* () {
            // Validate the Admin Enterprise & Application is already created
            // Admin Role is created
            // Admin user is also created: login password
            // ACL for Admin Role is created
            // Validate the Input here
            const DVRequest = {};
            const inputdata = "Request";
            let type = "FunctionID";
            DVRequest[inputdata] = {};
            DVRequest[inputdata][type] = "ValidateAdminEnterprise";
            type = "Action";
            DVRequest[inputdata][type] = "Validate";
            type = "DVObject";
            const type2 = "DVOBJ";
            DVRequest[inputdata][type] = {};
            DVRequest[inputdata][type][type2] = { Type: "Admin" };
            type = "Action";
            DVRequest[inputdata][type] = "Validate";
            type = "ExecutorFunction";
            DVRequest[type] = "ValidateAdminEnterprise";
            type = "ExecutorAction";
            DVRequest[type] = "Validate";
            // const dvobj =  {Request: {DVObject: { DVOBJ: { Type: "Admin"}}}};
            const FunctionHandler = new STMAction_1.STMActions("FunctionLauncher", "Launch", DVRequest);
            const STMInvoker = new ActionInvoker_1.ActionInvoker();
            STMInvoker.setAction(FunctionHandler);
            const response = yield STMInvoker.doInvokeAction();
            console.log("This is validateAdminEnterprise" + JSON.stringify(response));
            return 1;
        });
    }
}
exports.DVBuilder = DVBuilder;
//# sourceMappingURL=ServiceBuilder.js.map
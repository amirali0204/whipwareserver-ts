import {ActionInvoker} from "../DVActionsExecutor/ActionInvoker";
import {STMActions} from "../DVActionsExecutor/STMActions/STMAction";
import {DVUUID} from "./DVConstants";
export class DVBuilder {
    public DVBuilder() {}
    public async validateAdminEnterprise() {
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
        DVRequest[inputdata][type][type2] =  { Type: "Admin"};
        type = "Action";
        DVRequest[inputdata][type] = "Validate";
        type = "ExecutorFunction";
        DVRequest[type] = "ValidateAdminEnterprise";
        type = "ExecutorAction";
        DVRequest[type] = "Validate";
       // const dvobj =  {Request: {DVObject: { DVOBJ: { Type: "Admin"}}}};
        const FunctionHandler = new STMActions("FunctionLauncher", "Launch", DVRequest);
        const STMInvoker = new ActionInvoker();
        STMInvoker.setAction(FunctionHandler);
        const response = await STMInvoker.doInvokeAction();
        console.log("This is validateAdminEnterprise" + JSON.stringify(response));

        return 1;
    }
}

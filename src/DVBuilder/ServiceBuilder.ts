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
        const dvobj =  {DVObject: { DVOBJ: { Type: "Admin"} }};
        const FunctionHandler = new STMActions("ValidateAdminEnterprise", "Validate", dvobj);
        const STMInvoker = new ActionInvoker();
        STMInvoker.setAction(FunctionHandler);
        const response = await STMInvoker.doInvokeAction();
        console.log("This is validateAdminEnterprise" + JSON.stringify(response));

        return 1;
    }
}

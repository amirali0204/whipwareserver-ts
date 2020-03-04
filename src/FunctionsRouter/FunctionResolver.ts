import {
    Arg,
    Mutation,
    Query,
    Resolver,
  } from "type-graphql";
import {ActionInvoker} from "../ActionsExecutor/ActionInvoker";
import {STMActions} from "../ActionsExecutor/STMActions/STMAction";
import {FunctionInput} from "./FunctionInput";
import {FunctionObject} from "./FunctionObject";
import { FunctionScalar } from "./FunctionScalar";
@Resolver((of) => FunctionObject)
export class FunctionResolver {

  @Query((returns) => FunctionObject)
  public async QueryRouter(@Arg("dvObjectsdata") Input: FunctionInput): Promise<FunctionObject | undefined> {
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
    const inputdata = "Request";
    let type = "FunctionID";
    DVRequest[inputdata] = {};
    DVRequest[inputdata][type] = Input.FunctionID;
    type = "Action";
    DVRequest[inputdata][type] = Input.Action;
    type = "DVObject";
    const type2 = "DVOBJ";
    DVRequest[inputdata][type] = {};
    DVRequest[inputdata][type][type2] = Input.DVObject.DVOBJ;
    type = "Action";
    DVRequest[inputdata][type] = Input.Action;
    type = "ExecutorFunction";
    DVRequest[type] = Input.FunctionID;
    type = "ExecutorAction";
    DVRequest[type] = Input.Action;
    console.log(DVRequest);
    console.log("This is executing function launcher----");
    const FunctionHandler = new STMActions("FunctionLauncher", "Launch", DVRequest);
    const STMInvoker = new ActionInvoker();
    STMInvoker.setAction(FunctionHandler);

    const rec = new FunctionObject();
    rec.DVObject = new FunctionScalar();
    rec.RequestID = Input.RequestID;
    rec.DVObject.DVOBJ  = await STMInvoker.doInvokeAction();
    const resp = "Response";
    rec.DVObject.DVOBJ = rec.DVObject.DVOBJ[Input.FunctionID][resp];
    console.log("Responsed to query function Data ---> " + JSON.stringify(rec.DVObject.DVOBJ));
    return rec;
  }
  @Mutation((returns) => FunctionObject)
  public AtomicRouter(
    @Arg("dvObjectsdata") Input: FunctionInput
  ) {
    // Handles all Mutation Functions
    console.log(Input.EnterpriseID);
    console.log(Input.FunctionID);
    console.log(Input.ApplicationID);
    console.log(Input.Identity);
    console.log(Input.DVObject);
    console.log(Input.RequestID);
    console.log(Input.DVObject.DVOBJ);

// execute statemachine launcher here and respond

    const rec = new FunctionObject();
    rec.EnterpriseID = Input.EnterpriseID;
    rec.DVObject = new FunctionScalar();
    rec.RequestID = Input.RequestID;
    rec.DVObject.DVOBJ  = { temp : "temp", test: "test"};

    return rec;
  }

}

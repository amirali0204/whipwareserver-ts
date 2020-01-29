import {
    Arg,
    Mutation,
    Query,
    Resolver,
  } from "type-graphql";
import {ActionInvoker} from "../DVActionsDecorator/ActionInvoker";
import {STMActions} from "../DVActionsDecorator/STMActions/STMAction";
import {FunctionInput} from "./FunctionInput";
import {FunctionObject} from "./FunctionObject";
import { FunctionScalar } from "./FunctionScalar";
@Resolver((of) => FunctionObject)
export class FunctionResolver {

  @Query((returns) => FunctionObject)
  public async QueryRouter(@Arg("dvObjectsdata") Input: FunctionInput): Promise<FunctionObject | undefined> {
    // Query Method handler for DV
    console.log(Input.EnterpriseID);
    console.log(Input.FunctionID);
    console.log(Input.Action);
    console.log(Input.ApplicationID);
    console.log(Input.Identity);
    console.log(Input.DVObject);
    console.log(Input.RequestID);
    console.log(Input.DVObject.DVOBJ);

// execute statemachine launcher here and respond
    const FunctionHandler = new STMActions(Input.FunctionID, Input.Action, Input.DVObject.DVOBJ);
    const STMInvoker = new ActionInvoker();
    STMInvoker.setAction(FunctionHandler);

    const rec = new FunctionObject();
    rec.DVObject = new FunctionScalar();
    rec.RequestID = Input.RequestID;
    rec.DVObject.DVOBJ  = await STMInvoker.doInvokeAction();
    rec.DVObject.DVOBJ = rec.DVObject.DVOBJ[Input.FunctionID];
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

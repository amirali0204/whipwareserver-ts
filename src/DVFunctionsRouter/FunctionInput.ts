import { Field, InputType } from "type-graphql";
import { FunctionObject } from "./FunctionObject";
import {FunctionScalar} from "./FunctionScalar";
import {DVObjectScalar} from "./FunctionScalarType";
@InputType()
export class FunctionInput implements Partial<FunctionObject> {
  @Field()
  public EnterpriseID: string;

  @Field()
  public FunctionID: string;

  @Field()
  public Action: string;

  @Field()
  public Identity: string;

  @Field()
  public ApplicationID: string;

  @Field()
  public RequestID: string;

  @Field((type) => DVObjectScalar)
  public DVObject?: FunctionScalar;
}

import { Field, Float, Int, ObjectType } from "type-graphql";
import {FunctionScalar} from "./FunctionScalar";
import {DVObjectScalar} from "./FunctionScalarType";
@ObjectType({ description: "Object representing cooking recipe" })
export class FunctionObject {
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
  public DVObject: FunctionScalar;

}

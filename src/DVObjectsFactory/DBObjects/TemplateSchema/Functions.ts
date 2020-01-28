import { model, Schema} from "mongoose";
export const Functions = new Schema(
    {
      id: String,
      FunName: String,
      Type: String, // graphQL, Websocket
      InputAttribute: [{DVObject: String}],
      OutputAttribute: [{DVObject: String}],
      SysActionID: String,
      ResolversSchema: String,
      EnterpriseID: String,
      AppID: String
    },
    { timestamps: true }
  );

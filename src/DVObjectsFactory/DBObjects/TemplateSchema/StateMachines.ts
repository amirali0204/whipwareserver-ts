import { model, Schema} from "mongoose";
export const StateMachines = new Schema(
    {
      id: String,
      STMName: String,
      Machine: String,
      InputAttribute: [{DVObjects: String}],
      OutputAttributes: [{DVObjects: String}],
      EnterpriseID: String,
      AppID: String,
      State: String
    },
    { timestamps: true }
  );

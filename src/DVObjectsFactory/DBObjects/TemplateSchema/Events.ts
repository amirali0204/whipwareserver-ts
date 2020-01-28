import { model, Schema} from "mongoose";
export const DVEvents = new Schema(
    {
      id: String,
      EventName: String,
      EnterpriseID: String,
      AppID: String
    },
    { timestamps: true }
  );

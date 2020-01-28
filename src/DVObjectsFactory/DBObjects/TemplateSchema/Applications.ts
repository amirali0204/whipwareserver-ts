import { model, Schema, Types } from "mongoose";
export const Applications = new Schema(
    {
      _id: Types.ObjectId,
      id: String,
      AppName: String,
      EnterpriseID: String,
      State: String,
      URL: String
    },
    { timestamps: true }
  );

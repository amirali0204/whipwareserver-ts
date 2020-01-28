import { model, Schema} from "mongoose";
export const DVRules = new Schema(
    {
      id: String,
      RulesName: String,
      RuleSchema: String,
      Conditions: String,
      Actions: String,
      Events: String,
      EnterpriseID: String,
      AppID: String
    },
    { timestamps: true }
  );

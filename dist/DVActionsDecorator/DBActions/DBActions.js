"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
const uuid = require("uuid");
const mongooseSingleton_1 = require("../../DVBuilder/mongooseSingleton");
const DBObjectCreator_1 = require("../../DVObjectsFactory/DBObjects/DBObjectCreator");
const DBActionENUM_1 = require("./DBActionENUM");
class DBActions {
    constructor(action, Input, c_function) {
        this.InputObject = {};
        this.SysAction = action;
        this.InputObject = Input;
        this.m_Function = c_function;
        const dvid = "DVID";
        this.identifier = Input[dvid];
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`DBAction: (${this.SysAction}) for the function : (${this.m_Function})`);
            console.log("Input Data- " + JSON.stringify(this.InputObject));
            let DVObjectsFactory;
            DVObjectsFactory = new DBObjectCreator_1.DBObjectCreator(this.m_Function);
            let dbObject = {};
            dbObject = DVObjectsFactory.createObject();
            const m_schema = new mongoose.Schema(dbObject);
            if (mongooseSingleton_1.MongoSingleton.getInstance().getDBConnectionHandler().models[this.m_Function] !== undefined) {
                mongooseSingleton_1.MongoSingleton.getInstance().getDBConnectionHandler().deleteModel(this.m_Function);
            }
            const Schamatable = mongooseSingleton_1.MongoSingleton.getInstance().getDBConnectionHandler().model(this.m_Function, m_schema);
            switch (this.SysAction.toUpperCase()) {
                case DBActionENUM_1.DBActionENUM.CREATE: {
                    console.log("Creating = " + this.m_Function);
                    const dvid = "DVID";
                    this.InputObject[dvid] = uuid();
                    const NewEnterprise = new Schamatable(this.InputObject);
                    NewEnterprise.save();
                    break;
                }
                case DBActionENUM_1.DBActionENUM.UPDATE: {
                    Schamatable.findOneAndUpdate({ DVID: this.identifier }, this.InputObject, function (err, data) { });
                    break;
                }
                case DBActionENUM_1.DBActionENUM.FIND: {
                    const query = Schamatable.findOne({ DVID: this.identifier });
                    yield query.then((result) => {
                        this.OutputObject = result;
                        console.log("EXEC FIND Query for Function - " + this.m_Function);
                    });
                    console.log("FIND Query for Function - " + this.m_Function);
                    console.log(JSON.stringify(this.OutputObject));
                    break;
                }
                case DBActionENUM_1.DBActionENUM.DELETE: {
                    Schamatable.findOneAndDelete({ DVID: this.identifier }, this.InputObject, function (err, data) { });
                    break;
                }
                default: {
                    // here it should not come its an error or security issue
                    console.log("EnterpriseManagement Custom function called" + this.SysAction);
                    break;
                }
            }
            return this.OutputObject;
        });
    }
}
exports.DBActions = DBActions;
//# sourceMappingURL=DBActions.js.map
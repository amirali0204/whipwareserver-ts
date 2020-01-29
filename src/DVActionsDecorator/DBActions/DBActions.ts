import * as mongoose from "mongoose";
import uuid = require("uuid");
import {MongoSingleton} from "../../DVBuilder/mongooseSingleton";
import {DBObjectCreator} from "../../DVObjectsFactory/DBObjects/DBObjectCreator";
import {DVObjectCreator} from "../../DVObjectsFactory/DVObjectCreator";
import {ActionInterface} from "../ActionInterface";
import { DBActionENUM } from "./DBActionENUM";
export class DBActions implements ActionInterface {
    private SysAction: string; // Create , Delete , Update, Retrieve
    private InputObject = {};
    private OutputObject: object;
    private m_Function: string;
    private identifier: string;

    constructor(action: string, Input: object, c_function: string) {
        this.SysAction = action;
        this.InputObject = Input;
        this.m_Function = c_function;
        const dvid = "DVID";
        this.identifier = Input[dvid];
    }
    public async execute(): Promise<object | undefined> {
        console.log(`DBAction: (${this.SysAction}) for the function : (${this.m_Function})`);
     //   console.log("Input Data- " + JSON.stringify(this.InputObject));
        let DVObjectsFactory: DVObjectCreator;
        DVObjectsFactory = new DBObjectCreator(this.m_Function);
        let dbObject = {};
        dbObject = DVObjectsFactory.createObject();
        const m_schema = new mongoose.Schema(dbObject);
        if (MongoSingleton.getInstance().getDBConnectionHandler().models[this.m_Function] !== undefined) {
            MongoSingleton.getInstance().getDBConnectionHandler().deleteModel(this.m_Function);
        }
        const Schamatable = MongoSingleton.getInstance().getDBConnectionHandler().model(this.m_Function, m_schema);

        switch (this.SysAction.toUpperCase()) {
            case DBActionENUM.CREATE: {
              //  console.log("Creating = " + this.m_Function);
                const dvid = "DVID";
                this.InputObject[dvid] = uuid();
                const NewEnterprise = new Schamatable(this.InputObject);
                NewEnterprise.save();
                break;
            }
            case DBActionENUM.UPDATE: {
                Schamatable.findOneAndUpdate({ DVID : this.identifier}, this.InputObject, function(err, data) {});
                break;
            }
            case DBActionENUM.FIND: {
                const query = Schamatable.findOne({DVID: this.identifier});
                await query.then(( result) => {
                    this.OutputObject = result;
                    console.log("EXEC FIND Query for Function - " + this.m_Function);
                });
               // console.log("FIND Query for Function - " + this.m_Function);
               // console.log(JSON.stringify(this.OutputObject));
                break;
            }
            case DBActionENUM.DELETE: {
                Schamatable.findOneAndDelete({ DVID : this.identifier}, this.InputObject, function(err, data) {});
                break;
            }
            default: {
                // here it should not come its an error or security issue
                console.log("EnterpriseManagement Custom function called" + this.SysAction);
                break;
            }
        }
        return this.OutputObject;
    }
}

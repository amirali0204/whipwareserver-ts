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
const bcryptjs = __importStar(require("bcryptjs"));
class PasswordConvertor {
    constructor(context) {
        this.context = context;
    }
    doAlgorithm() {
        return __awaiter(this, void 0, void 0, function* () {
            this.OutputObject = {};
            console.log("This is the Convert Password - ");
            console.log(this.context);
            const Response = "HashedPassword";
            const DVOBJ = "DVOBJ";
            const Request = "Request";
            const DVObject = "DVObject";
            const Password = "Password";
            this.context[Request][DVObject][DVOBJ][Password] = yield bcryptjs.hash(this.context[Request][DVObject][DVOBJ][Password], 8);
            return this.OutputObject;
        });
    }
}
exports.PasswordConvertor = PasswordConvertor;
//# sourceMappingURL=PasswordConvertor.js.map
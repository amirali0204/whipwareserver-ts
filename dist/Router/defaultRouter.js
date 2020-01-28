"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import { getMovies } from '../controllers/getMovies';
const defaultRouter = express_1.Router();
defaultRouter.get("/", (req, res) => {
    res.send("Hello world! from DefRouter");
});
exports.default = defaultRouter;
//# sourceMappingURL=defaultRouter.js.map
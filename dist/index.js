"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import express from "express";
// const express = require( "express" );
const app = express_1.default();
const port = 8080; // default port to listen
const router = express_1.default.Router();
// define a route handler for the default home page
router.get("/", (req, res) => {
    res.send("Hello world!");
});
// append /api for our http requests
app.use("/api", router);
// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map
import express from "express";
import http from "http";
import { JsonORM } from "./json_server/ORM.js";
const app = express();
const server = http.createServer(app);
const orm = new JsonORM(`http://localhost:${process.env.JSON_SERVER_PORT || '3000'}`);
export { app, server, orm };

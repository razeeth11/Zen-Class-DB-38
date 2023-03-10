import express from "express";
import { MongoClient } from "mongodb";
import router from "./router.js";

const PORT = 2525;
export const app = express();
const MONGO_URL = "mongodb://127.0.0.1";
export const client = new MongoClient(MONGO_URL); // dial
// Top level await
await client.connect(); // call
console.log("Mongo is connected !!!  ");

app.get("/", function (request, response) {
  response.send("Zen Class DataBase");
});

app.use("/" , router);

app.listen(PORT, () => console.log(`The server started in : ${PORT}`));

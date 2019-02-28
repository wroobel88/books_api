const express = require("express");
var bodyParser = require("body-parser");

const PORT = process.env.PORT || 8082;

const app = express();
app.use(bodyParser.json()); // for parsing application/json
//books object - data
const books = [];
//repos
const bookRepo = require("./repos/book")(books);
//core - controller
const controller = require("./core");
//api
const { createRouter } = require("./api");
const router = createRouter(controller, bookRepo);
app.use("/api", router);
//error handling
const { errorHandler } = require("./error");
app.use(errorHandler());
//handle 404 routes
app.use((_, res) => res.status(404).send());

app.listen(PORT, () => console.log(`Books API listening on port ${PORT}!`));

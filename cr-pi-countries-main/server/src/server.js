const express = require("express");
const countriesRouter = require("./routes/countriesRouter");
const activitiesRouter = require("./routes/activitiesRouter");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(countriesRouter);
server.use(activitiesRouter);


module.exports = server;

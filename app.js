const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

//* Body Parser
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

dotenv.config({path: "./config/config.env"})

//! Data Base Connection
connectDB()

//* Main Port
const PORT = process.env.PORT || 5000;

//TODO Routes
app.use(require("./router/user"));

//? Starting Server
app.listen(PORT, console.log(`server is running in por: ${PORT}`))
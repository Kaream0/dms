require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000

const url = process.env.DATABASE_URL;
mongoose.connect(url);

const db = mongoose.connection;
db.on('error', (err) => { console.log(err)})
db.once('open', () =>{ console.log("connection succeeded")})

//modules
const express = require("express");
// const helmet = require("helmet");
const path = require("path");
const admin = require("firebase-admin");

//configs
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

//initialize server
const server = express();

//initialize firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

//global middleware
server.use(express.json());
// server.use(helmet());
server.use(express.static(path.join(__dirname, "client/build")));

//endpoints
//[GET] /api
server.get("/api", (req, res) => {
  res.status(200).json({ message: "Welcome" });
});

//[GET] *
server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

//exports
module.exports = server;

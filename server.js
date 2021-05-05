//modules
const express = require("express");
const path = require("path");
const admin = require("firebase-admin");
const apiRouter = require("./api/apiRouter");

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
server.use(express.static(path.join(__dirname, "client/build")));

//routers
server.use("/api", apiRouter);

//endpoints
//[GET] *
server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

//global error handler
server.use((err, req, res, _next) => {
  res.status(500).json({ err });
});

//exports
module.exports = server;

require("dotenv").config();
const express = require("express");
const path = require("path");
const admin = require("firebase-admin");
const serviceAccount = require(process.env.GOOGLE_APPLICATION_CREDENTIALS);
const PORT = process.env.PORT || 5000;
const server = express();
server.use(express.json());
server.use(express.static(path.join(__dirname, "client/build")));
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

server.get("/api", (req, res) => {
  res.json({ message: "API is up!!!" });
});

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

server.listen(PORT, () => {
  console.log(`\n*** Server listening on PORT:${PORT} ***\n`);
});

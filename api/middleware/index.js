//modules
const admin = require("firebase-admin");

//middleware
async function authenticateUser(req, res, next) {
  const { token } = req.body;
  if (!token) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  try {
    const decoded = await admin.auth().verifyIdToken(token);
    req.decoded = decoded;
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  authenticateUser,
};

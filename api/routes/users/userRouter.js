//modules
const router = require("express").Router();
const Users = require("./userModel");

//endpoints
//[GET] /
router.get("/", async (_req, res, next) => {
  try {
    const users = await Users.find();
    res.status(200).json({ users });
  } catch (err) {
    next(err);
  }
});

//[POST] /
router.post("/", async (req, res, next) => {
  console.log("post user / hit");
  const { uid, name } = req.decoded;
  try {
    const result = await Users.add({ user_id: uid, user_name: name });
    console.log("post user / result", result);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

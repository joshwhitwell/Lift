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
    console.log(err);
    next(err);
  }
});

//[POST] /
router.post("/", async (req, res, next) => {
  const { uid, name } = req.decoded;
  try {
    const result = await Users.add({ user_id: uid, user_name: name });
    res.status(200).json({ result });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;

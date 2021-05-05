//modules
const router = require("express").Router();
const { authenticateUser } = require("./middleware/index");
const userRouter = require("./routes/users/userRouter");

//global middleware
router.all("*", authenticateUser);

//routers
router.use("/users", userRouter);

//endpoints
//[GET] /api
router.get("/", (req, res) => {
  res.status(200).json({ message: `Welcome ${req.decoded.name}` });
});

module.exports = router;

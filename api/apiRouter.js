//modules
const router = require("express").Router();

//middleware
const { authenticateUser } = require("./middleware/middleware");

//routers
const userRouter = require("./routes/users/userRouter");

//global middleware
router.all("*", authenticateUser);

//routes
router.use("/users", userRouter);

//endpoints
//[GET] /api
router.get("/", (req, res) => {
  res.status(200).json({ message: `Welcome ${req.decoded.name}` });
});

module.exports = router;

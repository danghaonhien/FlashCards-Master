const router = require("express").Router();
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const profileRoutes = require("./profileRoutes");
// const questionRoutes = require("./questionRoutes");
router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/profile", profileRoutes);
// router.use("/question", questionRoutes);

module.exports = router;

const router = require("express").Router();
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const profileRoutes = require("./profileRoutes");
const getQuestionsRoutes = require("./getQuestionsRoutes");
const addQuestionRoutes = require("./addQuestionRoutes");
const addScore = require("./addScore");

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/profile", profileRoutes);
router.use("/quiz", getQuestionsRoutes);
router.use("/post", addQuestionRoutes);
router.use("/score", addScore);

module.exports = router;

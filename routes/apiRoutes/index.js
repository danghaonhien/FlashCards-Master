const router = require("express").Router();
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const profileRoutes = require("./profileRoutes");
const postRoutes = require("./postRoutes");
const getQuestionsRoutes = require("./getQuestionsRoutes");
const addQuestionRoutes = require("./addQuestionRoutes");
const addScore = require("./addScore");
const flashcardRoutes = require("./flashcardRoutes");

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/profile", profileRoutes);
router.use("/quiz", getQuestionsRoutes);
router.use("/post", addQuestionRoutes);
router.use("/score", addScore);
router.use("/flashcards", flashcardRoutes);
router.use("/posts", postRoutes);
module.exports = router;

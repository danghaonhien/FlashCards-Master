const router = require("express").Router();
const { getQuestions } = require("../../../controllers/getQuestionsController");
const { requireAuth } = require("../../../middlewares/authMiddlewares");
router.route("/").get(requireAuth, getQuestions);
module.exports = router;

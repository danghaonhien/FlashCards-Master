const router = require("express").Router();
const { addQuestion } = require("../../../controllers/questionController");
const { requireAuth } = require("../../../middlewares/authMiddlewares");
router.route("/").post(requireAuth, addQuestion);
module.exports = router;

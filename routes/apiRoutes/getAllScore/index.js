const router = require("express").Router();
const { requireAuth } = require("../../../middlewares/authMiddlewares");
const { getAllScore } = require("../../../controllers/questionController");
router.route("/").get(requireAuth, getAllScore);
module.exports = router;

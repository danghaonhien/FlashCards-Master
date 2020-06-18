const router = require("express").Router();
const { requireAuth } = require("../../../middlewares/authMiddlewares");
const { getScore } = require("./../../../controllers/questionController");
router.route("/").get(requireAuth, getScore);
module.exports = router;

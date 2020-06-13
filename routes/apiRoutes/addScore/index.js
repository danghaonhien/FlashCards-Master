const router = require("express").Router();
const { requireAuth } = require("../../../middlewares/authMiddlewares");
const { addScore } = require("./../../../controllers/questionController");
router.route("/").post(requireAuth, addScore);
module.exports = router;

const router = require("express").Router();
const {
  addFlashcard,
  getUserFlashcards,
  deleteFlashcardById,
} = require("../../../controllers/flashcardController");
const { requireAuth } = require("../../../middlewares/authMiddlewares");
router
  .route("/")
  .get(requireAuth, getUserFlashcards)
  .post(requireAuth, addFlashcard);
router.route("/:flashcardId").delete(requireAuth, deleteFlashcardById);
module.exports = router;

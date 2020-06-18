const router = require("express").Router();
const { requireAuth } = require("../../../middlewares/authMiddlewares");
const {
  userPost,
  getAllPosts,
  getPostById,
  deletePostById,
  userComment,
  deleteCommentById,
} = require("../../../controllers/postController");

router.route("/").post(requireAuth, userPost);
router.route("/").get(requireAuth, getAllPosts);
router.route("/:id").get(requireAuth, getPostById);
router.route("/:id").delete(requireAuth, deletePostById);
router.route("/comment/:id").post(requireAuth, userComment);
router.route("/comment/:id/:comment_id").delete(requireAuth, deleteCommentById);

module.exports = router;

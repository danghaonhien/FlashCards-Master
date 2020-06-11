const router = require("express").Router();
const {
  getCurrentUser,
  createProfile,
  getAllProfiles,
  getProfileByUserId,
  deleteProfile,
} = require("../../../controllers/profileController");
const { requireAuth } = require("../../../middlewares/authMiddlewares");

// /api/profile/me
router.get("/me", requireAuth, getCurrentUser);

// /api/profile
router.post("/", requireAuth, createProfile);

router.get("/", getAllProfiles);

router.get("/user/:user_id", getProfileByUserId);

router.delete("/", requireAuth, deleteProfile);

module.exports = router;

const router = require("express").Router();
const {
  signUp,
  // getAllUserEmails,
} = require("../../../controllers/userController");

// // /api/user/emails
// router.get("/emails", getAllUserEmails);

router.post("/", signUp);

module.exports = router;

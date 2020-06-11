const router = require("express").Router();
const passport = require("passport");
const { signIn, getUser } = require("../../../controllers/authController");
const {
  requireSignIn,
  requireAuth,
} = require("../../../middlewares/authMiddlewares");

router.post("/", requireSignIn, signIn);

router.get("/", requireAuth, getUser);

// //Create route for GOOGLE
// router.get("/google", passport.authenticate("google", { scope: ["profile"] }));
// router.get(
//   "/google/dashboard",
//   passport.authenticate("google", { failureRedirect: "/signin" }),
//   function (req, res) {
//     // Successful authentication, redirect home.
//     res.redirect("/dashboard");
//   }
// );
module.exports = router;

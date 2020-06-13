// const { isEmail, isLength } = require("validator");
const jwt = require("jwt-simple");
const { User } = require("../models");
const { secret } = require("../config");
function tokenForUser(user) {
  const timeStamp = new Date().getTime();
  return jwt.encode(
    { sub: user._id, iat: timeStamp },
    process.env.SECRET || secret
  );
}
module.exports = {
  getUser: async (req, res) => {
    try {
      //.select to exclude password
      const user = await User.findById(req.user._id).select("-password");
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(520).send("Server Error");
    }
  },

  signIn: (req, res) => res.json({ token: tokenForUser(req.user) }),
};

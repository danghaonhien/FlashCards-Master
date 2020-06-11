const jwt = require("jwt-simple");
const { User } = require("../models");
const { secret } = require("../config");
const brcypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const { isEmail, isLength } = require("validator");
function tokenForUser(user) {
  // 1st argument is the information we want to encode
  // 2nd argument is the secret we are going to use to encrypt it
  // By convention all json web tokens have a sub property
  // by sub we mean subject. As in who does this token belong to?
  // iat or issued at time is another convention by  jwt
  const timeStamp = new Date().getTime();
  // This subject will become the payload in our strategy
  // eslint-disable-next-line no-underscore-dangle
  return jwt.encode(
    { sub: user._id, iat: timeStamp },
    process.env.SECRET || secret
  );
}
module.exports = {
  getAllUserEmails: async (req, res) => {
    try {
      const userEmail = await User.findOne({ email: req.query.email }, "email");
      return res.status(200).json(userEmail);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },

  signUp: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(420).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    if (!name) {
      return res.status(422).json({ error: "Name is required" });
    }
    if (!email || !password) {
      return res
        .status(422)
        .json({ error: "You must provide email and password" });
    }

    if (!isEmail(email)) {
      return res
        .status(403)
        .json({ error: "You must provide a valid email address" });
    }

    if (!isLength(password, { min: 6 })) {
      return res
        .status(403)
        .json({ error: "Your password must be at least 6 characters long" });
    }

    try {
      let userInDb = await User.findOne({ email });
      //Check if User exists
      if (userInDb) {
        return res
          .status(420)
          .json({ errors: [{ msg: "User already exists" }] });
      }
      const user = await new User({
        name,
        email,
        password,
      }).save();
      const payload = {
        user: {
          id: user.id, //Use .id because of mongoose (_id for mongoDb)
        },
      };

      return res.json({ token: tokenForUser(user), payload, user });
    } catch (err) {
      console.error(err.message);
      res.status(520).send("Server error");
    }
  },
};

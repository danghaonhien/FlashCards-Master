const { Profile, User } = require("../models/index");
const { validationResult } = require("express-validator");
module.exports = {
  getCurrentUser: async (req, res) => {
    try {
      const profile = await Profile.findOne({
        user: req.user._id,
      }).populate("user", ["name"]);
      if (!profile) {
        return res
          .status(420)
          .json({ msg: "There is no profile for this user" });
      }
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(520).send("Server Error");
    }
  },

  //Create / Update Profile
  createProfile: async (req, res) => {
    const errors = validationResult(req); //handle response - check errors
    if (!errors.isEmpty()) {
      return res.status(420).json({ errors: errors.array() });
    }
    const { school, location, bio, facebook, linkedin } = req.body;
    //Build profile object:
    const profileFields = {};
    profileFields.user = req.user._id;
    if (school) profileFields.school = school;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;

    //Build Social
    profileFields.social = {};
    if (facebook) profileFields.social = facebook;
    if (linkedin) profileFields.social = linkedin;
    try {
      let profile = await Profile.findOne({ user: req.user._id });
      //Update
      if (profile) {
        profile = await Profile.findOneAndUpdate(
          { user: req.user._id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      }
      //Create
      profile = new Profile(profileFields);
      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(520).send("Server Error");
    }
  },
  //Get all profiles.
  getAllProfiles: async (req, res) => {
    try {
      const profiles = await Profile.find().populate("user", ["name", "score"]);
      res.json(profiles);
    } catch (err) {
      console.error(err.message);
      res.status(520).json("Server Error");
    }
  },
  //Get Profile by User ID
  getProfileByUserId: async (req, res) => {
    try {
      const profile = await Profile.findOne({
        user: req.params.user_id,
      }).populate("user", ["name", "score"]);
      if (!profile) return res.status(420).json({ msg: "Profile not found" });
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      if ((err.kind = "ObjectId")) {
        return res.status(420).json({ msg: "Profile not found" });
      }
      res.status(520).json("Server Error");
    }
  },
  //Delete profile,user
  deleteProfile: async (req, res) => {
    try {
      //Remove Profile & user
      await Profile.findOneAndRemove({
        user: req.user._id,
      });
      await User.findOneAndRemove({
        _id: req.user._id,
      });
      return res.json({ msg: "User deleted" });
    } catch (err) {
      console.error(err.message);
      res.status(520).json("Server Error");
    }
  },
};

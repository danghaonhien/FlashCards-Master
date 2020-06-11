const { Schema, model } = require("mongoose");
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  school: {
    type: String,
  },
  location: {
    type: String,
  },
  bio: {
    type: String,
  },
  social: {
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const Profile = model("Profile", ProfileSchema);
module.exports = Profile;

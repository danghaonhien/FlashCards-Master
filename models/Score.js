const { Schema, model } = require("mongoose");
const ScoreSchema = new Schema({
  score: {
    type: Number,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});
const Score = model("Score", ScoreSchema);
module.exports = Score;

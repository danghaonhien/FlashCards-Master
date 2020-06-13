const { Schema, model } = require("mongoose");
const QuestionsSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});
const Questions = model("Questions", QuestionsSchema);
module.exports = Questions;

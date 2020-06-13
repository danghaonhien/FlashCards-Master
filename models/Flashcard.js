const { Schema, model } = require("mongoose");
const FlashcardSchema = new Schema({
  front: {
    type: String,
    required: [true, "You must enter front card."],
  },
  back: {
    type: String,
    required: [true, "You must enter back card"],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
const Flashcard = model("Flashcard", FlashcardSchema);
module.exports = Flashcard;

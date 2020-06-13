const { Flashcard } = require("../models");
module.exports = {
  addFlashcard: async (req, res) => {
    const { front, back } = req.body;
    if (!front || !back) {
      return res.status(400).json({ error: "You must provide card name." });
    }
    try {
      const newFlashcard = await new Flashcard({
        front,
        back,
        user: req.user._id,
      }).save();
      req.user.flashcards.push(newFlashcard);
      await req.user.save();
      return res.status(200).json(newFlashcard);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  getUserFlashcards: async (req, res) => {
    try {
      const flashcards = await Flashcard.find({ user: req.user._id });
      return res.json(flashcards);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  deleteFlashcardById: async (req, res) => {
    const { flashcardId } = req.params;
    try {
      const FlashcardToDelete = await Flashcard.findById(flashcardId);
      if (!FlashcardToDelete) {
        return res.status(401).json({ error: "No Card Found" });
      }
      if (req.user._id.toString() !== FlashcardToDelete.user.toString()) {
        return res.json(401).json({ error: "You cannot delete this card." });
      }
      const deletedFlashcard = await Flashcard.findByIdAndDelete(flashcardId);
      return res.json(deletedFlashcard);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
};

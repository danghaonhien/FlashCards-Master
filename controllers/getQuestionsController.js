const { Questions } = require("../models");
module.exports = {
  getQuestions: async (req, res) => {
    try {
      const questions = await Questions.find();
      // console.log(questions);
      if (!questions) {
        return res.status(200).json({ error: "No questions found" });
      }
      return res.json(questions);
    } catch (error) {
      return res.status(403).json({ error });
    }
  },
};

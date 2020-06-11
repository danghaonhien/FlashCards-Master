// const { Question } = require("../models/index");
// const { validationResult } = require("express-validator");
// module.exports = {
//   getCurrentQuestion: async (req, res) => {
//     try {
//       const question = await Question.findOne({
//         user: req.user._id,
//       }).populate("user", ["name "]);
//       if (!question) {
//         return res.status(420).json({ msg: "No more questions" });
//       }
//       res.json(question);
//     } catch (err) {
//       console.error(err.message);
//       res.status(520).send("Server Error");
//     }
//   },
//   //Create Question
//   createQuestion: async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(420).json({ errors: errors.array() });
//     }
//     const { content, answer, correctanswer, wronganswer } = req.body;
//     const questionFields = { content, answer, correctanswer, wronganswer };
//     questionFields.user = req.user._id;
//     if (content) questionFields.content = content;
//     if (answer) questionFields.answer = answer;
//     questionFields.options = {};
//     if (correctanswer) questionFields.options.correctanswer = correctanswer;
//     if (wronganswer) questionFields.options.wronganswer = wronganswer;
//     try {
//       let question = await Question.findOne({ user: req.user._id });
//       //Create
//       question = new Question(questionFields);
//       await question.save();
//       res.json(question);
//     } catch (err) {
//       console.error(err.message);
//       res.status(520).send("Server Error");
//     }
//   },
//   //Compare Answer
//   chosenAnswer: async (req, res) => {},
// };

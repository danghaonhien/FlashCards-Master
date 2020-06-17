const { User, Post } = require("../models");
const { validationResult } = require("express-validator");
module.exports = {
  //Post
  userPost: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(420).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");
      const newPost = new Post({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      });
      const post = await newPost.save();
      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(520).send("Server Error");
    }
  },

  //Get All Posts
  getAllPosts: async (req, res) => {
    try {
      const posts = await Post.find().sort({ date: -1 });
      res.json(posts);
    } catch (err) {
      console.error(err.message);
      res.status(520).send("Server Error");
    }
  },
  //Get Posts by Ids
  getPostById: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post) {
        return res.status(420).json({ msg: "Post not found" });
      }
      res.json(post);
    } catch (err) {
      console.error(err.message);
      if (err.kind === "ObjectId") {
        return res.status(420).json({ msg: "Post not found" });
      }
      res.status(520).send("Server Error");
    }
  },
  deletePostById: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post) {
        return res.status(420).json({ msg: "Post not found" });
      }
      //Check user
      if (post.user.toString() !== req.user.id) {
        return res.status(420).json({ msg: "User not authorized" });
      }
      await post.remove();
      res.json({ msg: "Post removed" });
    } catch (err) {
      console.error(err.message);
      if (err.kind === "ObjectId") {
        return res.status(420).json({ msg: "Post not found" });
      }
      res.status(520).send("Server Error");
    }
  },
  //Comment
  userComment: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(420).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");
      const post = await Post.findById(req.params._id);
      const newComment = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      };
      post.comments.unshift(newComment);
      await post.save();
      res.json(post.comments);
    } catch (err) {
      console.error(err.message);
      res.status(520).send("Server Error");
    }
  },

  //Delete Comment by Id
  deleteCommentById: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      //Pull out comment
      const comment = post.comments.find(
        (comment) => comment.id === req.params.comment_id
      );
      //Make sure comment exists
      if (!comment) {
        return res.status(420).json({ msg: "Comment does not exist" });
      }
      //Check user
      if (comment.user.toString() !== req.user.id) {
        return res.status(420).json({ msg: "User not authorized" });
      }
      const removeIndex = post.comments
        .map((comment) => comment.user.toString())
        .indexOf(req.user.id);
      post.comments.splice(removeIndex, 1);
      await post.save();
      res.json(post.comments);
    } catch (err) {
      console.error(err.message);
      res.status(520).send("Server Error");
    }
  },
};

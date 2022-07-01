var express = require("express");
var router = express.Router();

const userController = require("../controllers/userController");
const postController = require("../controllers/postController");
const commentController = require("../controllers/commentController");

router.get("/", (req, res) => {
  res.redirect("/api/posts");
});

// api/signup
router.post("/signup", userController.sign_up_post);

// api/login
router.post("/login", userController.login_post);

// api/posts - create post, read all posts
router
  .route("/posts")
  .post(userController.verify_token, postController.create_posts)
  .get(postController.get_posts);

// api/posts/:id - read, update and delete single post
router
  .route("/posts/:id")
  .get(postController.get_single_post)
  .put(userController.verify_token, postController.update_post)
  .delete(userController.verify_token, postController.delete_post);

// api/posts/:postid/comments - create comment, read all comments
router
  .route("/posts/:postid/comments")
  .post(commentController.create_comment)
  .get(commentController.get_comments);

// api/posts/:postid/comments/:commentid - read, update and delete single comment
router
  .route("/posts/:postid/comments/:commentid")
  .get(commentController.get_single_comment)
  .put(userController.verify_token, commentController.update_comment)
  .delete(userController.verify_token, commentController.delete_comment);

module.exports = router;

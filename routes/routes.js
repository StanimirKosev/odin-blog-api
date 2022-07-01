var express = require("express");
var router = express.Router();

const userController = require("../controllers/userController");
const postController = require("../controllers/postController");

router.get("/", (req, res) => {
  res.redirect("/api/posts");
});

// api/signup
router.post("/signup", userController.sign_up_post);
// api/login
router.post("/login", userController.login_post);

// api/posts
router.post("/posts", userController.verify_token, postController.create_posts);
router.get("/posts", userController.verify_token, postController.get_posts);

// api/posts/:id
router.get(
  "/posts/:id",
  userController.verify_token,
  postController.get_single_post
);

router.put(
  "/posts/:id",
  userController.verify_token,
  postController.update_post
);

router.delete(
  "/posts/:id",
  userController.verify_token,
  postController.delete_post
);
module.exports = router;

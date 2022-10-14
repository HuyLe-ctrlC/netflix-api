const {
  addToLikeMovies,
  getLikedMovies,
  removeFromLikedMovies,
} = require("../controllers/UserController");

const router = require("express").Router();

router.get("/liked/:email", getLikedMovies);
router.post("/add", addToLikeMovies);
router.put("/delete", removeFromLikedMovies);

module.exports = router;

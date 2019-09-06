const path = require("path");
const router = require("express").Router();
const booksRoutes = require("./books");

// Books Route
router.use("/books", booksRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;

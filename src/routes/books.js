const { tagControllers, bookControllers } = require("../controllers");
const fileUploader = require("../lib/uploader");

const router = require("express").Router();

router.get("/", bookControllers.getAllBooks);
router.post(
  "/",
  fileUploader({
    destinationFolder: "books",
    fileType: "image",
    prefix: "BOOK",
  }).single("book_image_file"),
  bookControllers.createBook
);
router.patch("/:id", bookControllers.updateBook);
router.delete("/:id", bookControllers.deleteBook);

module.exports = router;

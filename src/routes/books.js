const { tagControllers, bookControllers } = require("../controllers")

const router = require("express").Router()

router.get("/", bookControllers.getAllBooks)
router.post("/", bookControllers.createBook)
router.patch("/:id", bookControllers.updateBook)
router.delete("/:id", bookControllers.deleteBook)

module.exports = router
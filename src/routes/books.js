const { tagControllers } = require("../controllers")

const router = require("express").Router()

router.get("/", tagControllers.getAllTags)
router.post("/", tagControllers.createNewTag)
router.patch("/:id", tagControllers)
router.delete("/:id", tagControllers.deleteTagById)

module.exports = router
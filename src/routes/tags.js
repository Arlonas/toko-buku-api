const tagControllers = require("../controllers/tags")

const router = require("express").Router()

router.get("/", tagControllers.getAllTags)
router.post("/", tagControllers.createNewTag)
router.delete("/:id", tagControllers.deleteTagById )

module.exports = router
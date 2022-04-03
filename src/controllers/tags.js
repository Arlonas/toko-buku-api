const { Tag } = require("../lib/sequelize")

const tagControllers = {
    getAllTags: async (req, res, next) => {
        try {
            const { _limit = 3, _page = 1 } = req.query;

            delete req.query._limit
            delete req.query._page

            const findTags = await Tag.findAndCountAll({
                where: {
                    ...req.query
                },
                limit: _limit ? parseInt(_limit) : undefined,
                offset: (_page - 1) * _limit
            })

            return res.status(200).json({
                message: "Find Tags",
                result: findTags
            })
        } catch (err) {
            next()
        }
    },
    createNewTag: async (req, res, next) => {
        try {
            const { tag_name } = req.body

            const tagName = await Tag.findOne({
                where: {
                    tag_name
                }
            })
            if(tagName){
                return res.status(400).json({
                    message: "Tag has already exist"
                })
            }

            const newTag = await Tag.create({
                tag_name
            })

            return res.status(201).json({
                message: "Tag created",
                result: newTag
            })
        } catch (err) {
            next()
        }
    },
    deleteTagById: async (req, res, next) => {
        try {
            const { id } = req.params

            const deleteTag = await Tag.destroy({
                where: {
                    id
                }
            })

            return res.status(200).json({
                message: "Tag deleted",
                result: deleteTag
            })
        } catch (err) {
            next()
        }
    }
}

module.exports = tagControllers
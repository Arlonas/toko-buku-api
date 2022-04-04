const { Book, Tag } = require("../lib/sequelize");

const bookControllers = {
  getAllBooks: async (req, res, next) => {
    try {
      const { _limit = 3, _page = 1 } = req.query

      delete req.query._limit
      delete req.query._page

      const findBooks = await Book.findAndCountAll({
        where: {
          ...req.query
        },
        limit: _limit ? parseInt(_limit) : undefined,
        offset: (_page -1) * _limit,
        include: {
           model: Tag
        }
      })

      return res.status(200).json({
        message: "Find Book",
        result: findBooks
      })
    } catch (err) {
      next()
    }
  },
  createBook: async (req, res, next) => {},
  updateBook: async (req, res, next) => {
    try {
      const { id } = req.params;

      const updatedBook = await Book.update(
        {
          ...req.body,
        },
        {
          where: {
            id,
          },
        }
      );
      return res.status(201).json({
        message: "Updated Book",
        result: updatedBook,
      });
    } catch (err) {
      next();
    }
  },
  deleteBook: async (req, res, next) => {
      try {
          const { id } = req.params

          const deleteBook = await Book.destroy({
              where: {
                  id
              }
          })

          return res.status(200).json({
              message: "Book deleted"
          })
      } catch (err) {
          next()
      }
  },
};

module.exports = bookControllers;

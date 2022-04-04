const { Sequelize } = require("sequelize")
const mysqlConfig = require("../configs/database")

const sequelize = new Sequelize({
    username: mysqlConfig.MYSQL_USERNAME,
    password: mysqlConfig.MYSQL_PASSWORD,
    database: mysqlConfig.MYSQL_DB_NAME,
    port: 3306,
    dialect: "mysql",
    logging: false
})

const Tag = require("../models/tag")(sequelize)
const Book = require("../models/books")(sequelize)
const booksTag = require("../models/books_tags")(sequelize)

 Book.hasMany(booksTag, { foreignKey: "book_id" }) 
 booksTag.belongsTo(Book, { foreignKey: "book_id" })
 Tag.hasMany(booksTag, { foreignKey: "tag_id" }) 
 booksTag.belongsTo(Tag, { foreignKey: "tag_id" })

module.exports = {
    sequelize,
    Tag,
    Book,
    booksTag
}
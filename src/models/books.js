const { DataTypes } = require("sequelize")

const Book = (sequelize) => {
    return sequelize.define("Book", {
        book_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        book_cover_img: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
}

module.exports = Book
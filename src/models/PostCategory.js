module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: { 
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    categoryId: { 
      primaryKey: true,
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
  }, {
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true,
  });
    
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category,
      {
        as: 'categories',
        through: PostCategory,
        foreignKey: "postId",
        otherKey: "categoryId"
      });

    models.Category.belongsToMany(models.BlogPost,
      {
        as: 'posts',
        through: PostCategory,
        foreignKey: "categoryId",
        otherKey: "postId"
      });
  }

  return PostCategory;
};

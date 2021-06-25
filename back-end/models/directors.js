const Directors = (sequelize, DataTypes) => {
    const Director = sequelize.define(
      "directors",
      {
        name: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        school_Id: DataTypes.INTEGER,
      },
      { timestamps: false }
    );
    Director.associate = (models) => {
        Director.belongsTo(models.schools, {
        foreignKey: "id",
        as: "school",
      });
    };
    return Director;
  };
  
  module.exports = Directors;
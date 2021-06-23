const Teachers = (sequelize, DataTypes) => {
    const Teacher = sequelize.define(
      "teachers",
      {
        name: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        class_Id: DataTypes.INTEGER,
      },
      { timestamps: false }
    );
    Teacher.associate = (models) => {
      Teacher.belongsTo(models.classes, {
        foreignKey: "id",
        as: "class",
      });
    };
    return Teacher;
  };
  
  module.exports = Teachers;
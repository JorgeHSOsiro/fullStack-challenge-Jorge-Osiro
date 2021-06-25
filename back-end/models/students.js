const Students = (sequelize, DataTypes) => {
    const Student = sequelize.define(
      "students",
      {
        class_Id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        representative_one: DataTypes.STRING,
        representative_two: DataTypes.STRING,
        contact: DataTypes.STRING,
      },
      { timestamps: false }
    );
    Student.associate = (models) => {
        Student.belongsTo(models.classes, {
        foreignKey: "id",
        as: "class",
      });
    };
    return Student;
  };
  
  module.exports = Students;
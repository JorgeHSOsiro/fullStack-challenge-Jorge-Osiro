const Classes = (sequelize, DataTypes) => {
  const Class = sequelize.define(
    "classes",
    {
      school_Id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      
    },
    { timestamps: false }
  );
  Class.associate = (models) => {
    Class.belongsTo(models.schools, {
      foreignKey: "id",
      as: "school",
    });

    Class.hasMany(models.students, {
      foreignKey: "class_id",
      as: "student",
    });

    Class.hasOne(models.teachers, {
      foreignKey: "class_id",
      as: "teacher",
    });
  };
  return Class;
};

module.exports = Classes;

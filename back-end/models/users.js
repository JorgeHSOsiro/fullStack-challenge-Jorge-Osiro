const Users = (sequelize, DataTypes) => {
    const User = sequelize.define(
      "users",
      {
        name: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        role: DataTypes.STRING,
      },
      { timestamps: false }
    );
    
    return User;
  };
  
  module.exports = Users;
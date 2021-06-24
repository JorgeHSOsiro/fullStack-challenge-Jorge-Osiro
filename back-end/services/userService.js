const { directors, teachers } = require("../models");

const registerTeacher = async (name, password, email) => {
  const emailInDatabase = await teachers.findOne({ where: { email } });
  if (emailInDatabase) {
    return { message: "Email ja registrado" };
  } else {
    const newUSer = await teachers.create({
      name,
      password,
      email,
    });
    return newUSer;
  }
};

const registerDirector = async (name, password, email) => {
    const emailInDatabase = await teachers.findOne({ where: { email } });
    if (emailInDatabase) {
      return { message: "Email ja registrado" };
    } else {
      const newUSer = await directors.create({
        name,
        password,
        email,
      });
      return newUSer;
    }
  };

module.exports = {
  registerTeacher,
  registerDirector
};

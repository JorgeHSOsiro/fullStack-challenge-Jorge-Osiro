const { directors, teachers } = require("../models");
const userService = require("../services/userService");

const loginTeacher = async (req, res) => {
  try {
    const { email } = req.body;
    const response = await teachers.findOne({ where: { email } });

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const loginDirector = async (req, res) => {
    try {
      const { email } = req.body;
      const response = await directors.findOne({ where: { email } });
  
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (role === "Professor") {
      const newTeacher = await userService.registerTeacher(
        name,
        password,
        email
      );
      return res.status(200).json(newTeacher);
    } else if (role === "Diretor") {
        const newDirector = await userService.registerDirector(
            name,
            password,
            email
          );
          return res.status(200).json(newDirector);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  loginDirector,
  loginTeacher,
  registerUser
};

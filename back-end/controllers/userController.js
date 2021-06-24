const { directors, teachers } = require("../models");
const userService = require("../services/userService");

const loginTeacher = async (req, res) => {
  try {
    const { email, password } = req.body;
    const teacher = await teachers.findOne({ where: { email } });
    console.log('res', teacher);
    if (!teacher) {
      throw new Error("Email nao encontrado")
    } else if (teacher.password !== password) {
      throw new Error("Senha incorreta");
    }
    return res.status(200).json(teacher);
  } catch (e) {
    console.log('erro', e.message);
    return res.status(401).json({ message: e.message });
  }
};

const loginDirector = async (req, res) => {
  try {
    const { email, password } = req.body;
    const director = await directors.findOne({ where: { email } });
    if (!director) {
      throw new Error("Email nao encontrado")
    } else if (director.password !== password) {
      throw new Error("Senha incorreta");
    }
    return res.status(200).json(director);
  } catch (e) {
    console.log(e);
    return res.status(401).json({ message: e.message });
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
  registerUser,
};

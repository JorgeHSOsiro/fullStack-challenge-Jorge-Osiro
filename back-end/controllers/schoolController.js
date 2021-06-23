const { schools } = require("../models");

const getAllSchools = async (_req, res) => {
  try {
    const response = await schools.findAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getSchool = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await schools.findOne({ where: { id } });
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const registerSchool = async (req, res) => {
  try {
    const { schoolName, director } = req.body;
    const oldSchool = await schools.findOne({ where: { name: schoolName } });
    if (oldSchool) {
      throw new Error();
    } else {
      const newSchool = await schools.create({ name: schoolName, director });
      return res.status(200).json(newSchool);
    }
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

const updateSchool = async (req, res) => {
  try {
    const { id } = req.params;
    const { schoolName, director } = req.body;
    const updated = await schools.update(
      { name: schoolName, director },
      {
        where: { id },
      }
    );
    res.status(200).json(updated);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

const deleteSchool = async (req, res) => {
  try {
    const { id } = req.params;
    await schools.destroy({ where: { id } });
    return res.status(200).json({ message: "excluído com sucesso!" });
  } catch (error) {
    return res.status(50).json({ message: error.message });
  }
};

module.exports = {
  getAllSchools,
  registerSchool,
  getSchool,
  updateSchool,
  deleteSchool,
};

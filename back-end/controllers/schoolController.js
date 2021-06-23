const { schools, directors } = require("../models");

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
    const director = await directors.findOne({where: {school_id: id}});
    return res.status(200).json({response, director});
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const registerSchool = async (req, res) => {
  try {
    const { schoolName } = req.body;
    const oldSchool = await schools.findOne({ where: { name: schoolName } });
    if (oldSchool) {
      throw new Error();
    } else {
      const newSchool = await schools.create({ name: schoolName });
      return res.status(200).json(newSchool);
    }
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

const deleteSchool = async (req, res) => {
  try {
    const { id } = req.params;
    await schools.destroy({ where: { id } });
    return res.status(200).json({ message: "excluído com sucesso!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateSchool = async (req, res) => {
  try {
    const { id } = req.params;
    const {  schoolName, directorName } = req.body;
    await schools.update({name: schoolName}, {where: { id }});
    await directors.update({school_id: id}, {where: { name: directorName }});
    return res.status(200).json({ message: "sucesso!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getAllSchools,
  registerSchool,
  getSchool,
  deleteSchool,
  updateSchool,
};

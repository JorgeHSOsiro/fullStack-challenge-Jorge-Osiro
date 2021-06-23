const { directors } = require('../models');

const getAllDirectors = async (req, res) => {
    try {
        const response = await directors.findAll();
        return res.status(200).json(response);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}

module.exports = {
    getAllDirectors,
}
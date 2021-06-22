const { schools }  = require('../models')

const getAllSchools = async (req, res) => {
    try {
        const response = await schools.findAll();
        console.log(response);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAllSchools,
}
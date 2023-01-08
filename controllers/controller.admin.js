const Department = require('../models/model.department')

exports.addDepartment = async (req, res) => {
	try {
		const { name } = req.body
		const check = await Department.findOne({ name: name.toLowerCase() })
		if (check) return res.status(409).send('Department already exists')
		await Department.create({ name })
		res.status(201).send('Department created succesfully')
	} catch (error) {
		res.status(500).send('Internal Server Error! ' + error)
	}
}

exports.getDepartments = async (req, res) => {
	try {
		const departments = await Department.find()
		res.status(200).json({ departments })
	} catch (error) {
		res.status(500).send('Internal Server Error! ' + error)
	}
}

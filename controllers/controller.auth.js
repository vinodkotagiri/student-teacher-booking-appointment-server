const User = require('../models/model.user')
const encryptPassword = require('../helpers/encryptPassword')
const generateToken = require('../helpers/generateToken')
const verifyPassword = require('../helpers/verifyPassword')
exports.register = async (req, res) => {
	try {
		const { firstName, lastName, email, password } = req.body
		const checkEmail = await User.findOne({ email })
		if (checkEmail) return res.status(409).send('User with the same email already exists! try other email')
		const hashedPassword = await encryptPassword(password, 12)
		const user = await User.create({ firstName, lastName, email, password: hashedPassword })
		const {
			password: { passwd },
			...rest
		} = user._doc
		const token = generateToken({ _id: user._id }, process.env.JWT_SECRET, '7h')
		res.status(201).json({ userInfo: rest, token })
	} catch (error) {
		res.status(500).send('Internal Server Error! ' + error)
	}
}
exports.login = async (req, res) => {
	try {
		const { email, password } = req.body
		const user = await User.findOne({ email })
		if (!user) return res.status(404).send('User with the  email do not exists!')
		const checkPasswd = await verifyPassword(password, user.password)
		if (!checkPasswd) return res.status(401).send('Invalid password!')
		const {
			password: { passwd },
			...rest
		} = user._doc
		const token = generateToken({ _id: user._id }, process.env.JWT_SECRET, '7h')
		res.status(200).json({ userInfo: rest, token })
	} catch (error) {
		res.status(500).send('Internal Server Error! ' + error)
	}
}

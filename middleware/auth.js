const jwt = require('jsonwebtoken')
function isAuth(req, res, next) {
	// Get the JWT from the request header
	let token = req.header('Authorization')
	// If there is no token, return an error
	if (!token) {
		return res.status(401).json({ error: 'No token, authorization denied' })
	}
	try {
		// Verify the token and get the user payload
		token = token.split(' ')[1]
		const decoded = jwt.verify(token, process.env.JWT_SECRET)
		req.id = decoded.id
		req.role = decoded.role
		console.log(req.id)
		next()
	} catch (error) {
		// If the token is invalid, return an error
		res.status(401).json({ error: 'Token is not valid' })
	}
}

function isAdmin(req, res, next) {
	if (!req.role === 'admin') res.status(401).json({ error: 'You are not an admin' })
	next()
}

module.exports = { isAuth, isAdmin }

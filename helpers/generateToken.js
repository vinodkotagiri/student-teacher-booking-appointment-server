const jwt = require('jsonwebtoken')
/**
 *
 * @param {object} data
 * @param {string} secret
 * @param {string} expiry
 */
function generateToken(data, secret, expiry) {
	const token = jwt.sign(data, secret, { expiresIn: expiry })
	return token
}
module.exports = generateToken

const bcrypt = require('bcrypt')
/**
 *
 * @param {String} password
 * @param {Number} salt
 * @returns
 */
async function encryptPassword(password, salt) {
	const hashedPassword = await bcrypt.hash(password, salt)
	return hashedPassword
}
module.exports = encryptPassword

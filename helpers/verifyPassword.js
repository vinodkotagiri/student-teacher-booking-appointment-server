const bcrypt = require('bcrypt')
async function verifyPassword(password, hashedPassword) {
	return bcrypt.compare(password, hashedPassword)
}
module.exports = verifyPassword

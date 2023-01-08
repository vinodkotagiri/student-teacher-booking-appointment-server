const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
/**
 *
 * @param {String} URI
 */
function connectDB(URI) {
	mongoose.connect(URI, { useNewUrlParser: true }, (err) => {
		if (err) throw err
		console.log('Database Connection succesful!')
	})
}
module.exports = connectDB

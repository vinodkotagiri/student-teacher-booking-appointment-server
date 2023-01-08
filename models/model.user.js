const mongoose = require('mongoose')
const { Schema, model } = mongoose
const userSchema = new Schema({
	firstName: { type: String, required: true, lowercase: true },
	lastName: { type: String, required: true, lowercase: true },
	email: { type: String, required: true, unique: true, lowercase: true },
	password: { type: String, required: true },
	emailVerified: {
		type: Boolean,
		default: false,
	},
	approved: {
		type: Boolean,
		default: false,
	},
	role: {
		type: String,
		default: 'student',
	},
	assignedStudents: [{ type: Schema.Types.ObjectId, ref: 'User' }],
	assignedTeacher: [{ type: Schema.Types.ObjectId, ref: 'User' }],
	appointments: [{ type: Schema.Types.ObjectId, ref: 'Appointment' }],
	subject: [{ type: Schema.Types.ObjectId, ref: 'Subject' }],
})
module.exports = model('User', userSchema)

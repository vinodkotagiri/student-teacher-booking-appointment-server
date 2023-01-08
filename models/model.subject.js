const mongoose = require('mongoose')
const { Schema, model } = mongoose
const subjectSchema = new Schema({
	name: { type: String, required: true, unique: true, lowercase: true },
	department: { type: Schema.Types.ObjectId, ref: 'Department' },
})
module.exports = model('Subjects', subjectSchema)

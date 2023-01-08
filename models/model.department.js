const mongoose = require('mongoose')
const { Schema, model } = mongoose
const departmentSchema = new Schema({
	name: { type: String, required: true, unique: true, lowercase: true },
})
module.exports = model('Department', departmentSchema)

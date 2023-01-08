const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()
const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI
const connectDB = require('./config/db')
//Import Routes
const authRoutes = require('./routes/route.auth')
const adminRoutes = require('./routes/route.admin')
//Create express app and add middleware
const app = express()
app.use(cors())
app.use(morgan('combined'))
app.use(express.json())
//Add Routes
// app.use('/api/admin', adminRoutes)
app.use('/auth', authRoutes)
app.use('/admin', adminRoutes)
// Connect the DB and start the server
app.listen(PORT, () => {
	connectDB(MONGO_URI)
	console.log('Server started on port: ' + PORT)
})

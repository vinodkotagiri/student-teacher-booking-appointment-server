const express = require('express')
const router = express.Router()
const { getDepartments, addDepartment } = require('../controllers/controller.admin')
const { isAdmin, isAuth } = require('../middleware/auth')
router.get('/departments', isAuth, isAdmin, getDepartments)
router.post('/departments/add', isAuth, isAdmin, addDepartment)
module.exports = router

const express = require('express')
const router=express.Router()
const courseController=require('../controllers/course')
// const {verifyUser}  = require('../middleware/auth')
router.get('/courses',courseController.getCourses)
router.get('/course/:id',courseController.getCourse)

module.exports = router;
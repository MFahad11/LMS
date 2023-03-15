const express = require('express')
const router=express.Router()
const courseController=require('../controllers/course')
const courseModel=require('../models/schema/course')
// const {verifyUser}  = require('../middleware/auth')
router.post('/course',async(req,res)=>{
    await courseModel.create(req.body)
})
router.get('/courses',courseController.getCourses)
router.get('/course/:id',courseController.getCourse)
router.put('/course/:id',courseController.updateCourse)

module.exports = router;
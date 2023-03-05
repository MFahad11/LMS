const express = require('express')
const router=express.Router()
const lectureController=require('../controllers/lecture')
router.get('/lectures',lectureController.getlectures)
router.get('/lecture/:id',lectureController.getlecture)
router.post('/lectures',lectureController.setlectures)

module.exports = router;
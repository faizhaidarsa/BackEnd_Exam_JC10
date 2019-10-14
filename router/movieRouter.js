let express = require('express')
let router = express.Router()
const {movieController} =require('../controller')

router.get('/getmovie',movieController.getMovie)
router.post('/addmovie',movieController.addMovie)
router.post('/deletemovie',movieController.deleteMovie)
router.post('/updatemovie',movieController.updateMovie)

module.exports=router
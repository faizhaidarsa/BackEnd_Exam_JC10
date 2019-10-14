let express = require('express')
let router = express.Router()
const {connectionController} =require('../controller')

router.get('/getconnection',connectionController.getConnection)
router.post('/addconnection',connectionController.addConnection)
router.post('/deleteconnection',connectionController.deleteConnection)

module.exports=router
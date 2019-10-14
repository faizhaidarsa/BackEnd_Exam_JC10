let express = require('express')
let router = express.Router()
const {categoryController} =require('../controller')

router.get('/getcategory',categoryController.getCategory)
router.post('/addcategory',categoryController.addCategory)
router.post('/deletecategory',categoryController.deleteCategory)
router.post('/updatecategory',categoryController.updateCategory)

module.exports=router
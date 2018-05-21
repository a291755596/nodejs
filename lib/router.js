var express = require('express')
var router = express.Router()

var postPage = require('./pagePost')


router.get('/', postPage.find)



module.exports = router
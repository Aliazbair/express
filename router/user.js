const router = require('express').Router()
const { register } = require('../controller/user')

//@route POST api/user/register
//@ desc Register user
//@access public
router.route('/register').post(register)
module.exports = router

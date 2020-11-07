const router = require('express').Router()
const User = require('../model/User')

// @products  Get
//@route  /prodduct
router.post('register', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    passowrd: req.body.passowrd,
  })
  try {
    const saveUser = await user.save()
    res.send(saveUser)
  } catch (err) {
    res.status(400).send(err)
  }
})

module.exports = router

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

// check validation for request
const { checkSchema, validationResult } = require('express-validator')
const gravatar = require('gravatar') // get user image by email
const User = require('../model/User')
exports.register= [
    // validation
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    //   check the errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      })
    }

    // get name and email and pasword
    const { name, email, password } = req.body

    try {
      // check if user alraedy exist
      let user = await User.findOne({ email })

      if (user) {
        return res.status(400).json({
          errors: [
            {
              msg: 'User already exist',
            },
          ],
        })
      }

      //   if not exist
      // get image form gravat
      const avatar = gravatar.url(email, {
        s: '200', //size
        r: 'pg', //rate
        d: 'mm',
      })

      // create user object
      const user = new User({ name, email, password, avatar })

      // encrypt passowrd
      const salt = await bcrypt.genSalt(10) // generate salt contain 10

      // save password
      user.password = await bcrypt.hash(passowrd, salt)

      // save user in database
      await user.save()

      // payload to generate token
      const payload = {
        user: {
          id: user.id,
        },
      }

      // jwt
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err

          // send token to res
          res.json(token)
        }
      )
    } catch (err) {
      console.log(err)
      res.status(500).json({
        msg: 'server errors',
      })
    }
  }
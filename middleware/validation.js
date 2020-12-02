const fs = require('fs')
module.exports = (req, res, next) => {
  //  first we will save category name and image
  // vaild req.body or req.file nt get undefined
  if (typeof req.file === 'undefinded' || typeof req.body === 'undefined') {
    // if errors
    return res.status(400).json({
      errors: 'problem with sending data',
    })
  }

  // get image and name
  console.log(req.file)
  let { name, image } = req.body
  // check type of image we will accept only [png,jpg, jpeg]
  if (
    !req.file.mimetype.includes('jpeg') &&
    !req.file.mimetype.includes('png') &&
    !(req, file.mimetype.includes('jpg'))
  ) {
    // first remove fiel
    fs.unlinkSync(image)
    return res.status(400).json({
      errors: 'file not support',
    })
  }

  //   check file size max file size 1 megabyte if need max 2 MB (1024 * 1024 * 2)
  if (req.file.size > 1024 * 1024) {
    //   remove file
    fs.unlinkSync(image)
    return res.status(400).json({
      errors: 'File is Tooo large',
    })
  }
  //   check the fields is empty
  if (!name || !image) {
    return res.status(400).json({
      errors: 'all fields are required',
    })
  }
  // else upload file
  next()
}

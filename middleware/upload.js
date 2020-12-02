const multer = require('multer')
const paht = require('path')

// first set storage => file name and destition
const storage = multer.diskStorage({
  // fisrt out detination uploads folder
  destination: function (req, res, cd) {
    cd(null, './uploads/')
  },
  filename: function (req, res, cd) {
    console.log(file)
    //genrate unique name for each image
    cd(null, 'ali' + '-' + Date.now() + path.extname(file.originalname))
  },
})

// file filter we accept any file and we will do validation later
const filterFile = (req, res, cd) => {
  cd(null, true)
}

let upload = multer({
  storage: storage,
  filterFile: filterFile,
})

// export upload as single file you can use multiaple
module.exports = upload.single('image')

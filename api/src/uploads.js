const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}.png`);
  },
})

const imageFilter = function (req, file, cb) {
  if (file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Only PNG image files are allowed'), false);
  }
}

const upload = multer({ storage: storage, limits: { fileSize: 5 * 1024 * 1024 } })

exports.upload = upload
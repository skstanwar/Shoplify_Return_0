import multer from "multer";
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
        req.session.image_name=Date.now() + '.jpg';
      cb(null, req.session.image_name) //Appending .jpg
    }
  })
export const upload = multer({ storage: storage });

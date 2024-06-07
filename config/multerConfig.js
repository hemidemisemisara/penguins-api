const multer = require("multer");
const path = require("path");

const storage = (route, timestamp) =>
  multer.diskStorage({
    destination: (req, file, cb) => {
      // saving to the public/images/section-folder
      cb(null, path.join("public/images", route));
    },
    filename: (req, file, cb) => {
      // save the image filename as section-name-timestamp.ext
      const ext = path.extname(file.originalname);
      cb(null, `${route}-${timestamp}${ext}`);
    },
  });

const upload = (route, timestamp) =>
  multer({ storage: storage(route, timestamp) });

module.exports = upload;

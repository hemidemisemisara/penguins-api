const multer = require("multer");
const path = require("path");

const storage = (route, date) =>
  multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join("public/images", route));
    },
    filename: (req, file, cb) => {
      //const ext = path.extname(file.originalname);
      cb(null, `${route}-${date}.jpg`);
    },
  });

const upload = (route, date) => multer({ storage: storage(route, date) });

module.exports = upload;

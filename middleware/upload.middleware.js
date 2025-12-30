const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "uploads/reports",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowed = /pdf|jpg|jpeg|png/;
  const ext = path.extname(file.originalname).toLowerCase();
  allowed.test(ext) ? cb(null, true) : cb("Unsupported file", false);
};

module.exports = multer({ storage, fileFilter });

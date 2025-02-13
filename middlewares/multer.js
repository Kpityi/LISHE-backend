import multer from "multer";

export const UploadFile = (dir) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./public/${dir}/`);
    },
    filename: function (req, file, cb) {
      const dateNow = Date.now();
      cb(null, `${dateNow}_${file.originalname}`);
    },
  });
  return multer({ storage: storage });
};

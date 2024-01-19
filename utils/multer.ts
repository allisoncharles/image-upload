import multer from "multer";
import path from "path";

interface MulterRequest extends Request {
  fileValidationError: any;
}

export const storage = multer.diskStorage({
  destination: "./public/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

export const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      let request = req as unknown as MulterRequest;
      request.fileValidationError = "Invalid file type";

      return cb(null, false);
    }
  },
}).single("profile");

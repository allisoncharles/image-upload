import { Request, Response } from "express";
import { upload } from "../../utils/multer";
import { SITEURL } from "../../index";
import Image from "../../model/image";

interface MulterRequest extends Request {
  fileValidationError: any;
}

const uploadImage = (req: Request, res: Response) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ success: 0, message: "No file selected" });
    }
    let request = req as MulterRequest;
    if (request.fileValidationError) {
      return res
        .status(400)
        .json({ success: 0, message: request.fileValidationError });
    }

    try {
      const image = new Image({
        imageUrl: `${SITEURL}/images/${req.file?.filename}`,
      });
      await image.save();

      return res.json({
        success: 1,
        imgUrl: `${SITEURL}/images/${req.file?.filename}`,
        message: "Image posted",
      });
    } catch (err) {
      return res.status(500).json(err);
    }
  });
};

const controller = { uploadImage };

export default controller;

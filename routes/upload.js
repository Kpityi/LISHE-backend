import express from "express";
import { imageUpload } from "../controller/upload.js";
import { UploadFile } from "../middlewares/multer.js";

const router = express.Router();

const uploadImage = UploadFile("media/images");

router.post("/image", uploadImage.any(), imageUpload);

export default router;

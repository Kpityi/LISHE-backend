import express from "express";
import { getGallery } from "../controller/gallery.js";

const router = express.Router();

router.get("/", getGallery);

export default router;

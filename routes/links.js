import express from "express";
import { getDownloadLinks, getLinks } from "../controller/links.js";

const router = express.Router();

router.get("/", getLinks);
router.get("/download", getDownloadLinks);

export default router;

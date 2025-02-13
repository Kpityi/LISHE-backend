import express from "express";
import { getAsideLinks } from "../controller/asideLinks.js";

const router = express.Router();

router.get("/", getAsideLinks);

export default router;

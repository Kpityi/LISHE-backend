import express from "express";
import { getImportant, getLastPost } from "../controller/home.js";

const router = express.Router();

router.get("/important", getImportant);
router.get("/post", getLastPost);

export default router;

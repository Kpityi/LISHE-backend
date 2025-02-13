import express from "express";
import { getPosts, getTenders } from "../controller/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/tender", getTenders);
router.get("/:id", getPosts);

export default router;

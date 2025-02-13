import express from "express";
import { getManagement } from "../controller/management.js";

const router = express.Router();

router.get("/", getManagement);

export default router;

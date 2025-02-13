import express from "express";
import {
  getBasicPrices,
  getHECSSMSZPrices,
  getMartelyPrices,
} from "../controller/prices.js";

const router = express.Router();

router.get("/basic", getBasicPrices);
router.get("/HECSMSZ", getHECSSMSZPrices);
router.get("/Martely", getMartelyPrices);

export default router;

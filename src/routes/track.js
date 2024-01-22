import { Router } from "express";
import { trackProduct } from "../controllers/track.js";

const router = Router();
router.route("/").post(trackProduct);

export default router;

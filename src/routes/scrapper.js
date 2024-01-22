import { Router } from "express";
const router = Router();

import { getAllProducts } from "../controllers/scrapper.js";
// import trackProduct from '../controllers/track';

router.route("/:productName").get(getAllProducts);
// router.route("/:id").get(getSingleProduct);

export default router;

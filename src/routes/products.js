import { Router } from "express";
const router = Router();

import {
  getAllProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/products.js";

router.route("/").get(getAllProducts).post(createProduct);
router.route("/:id").get(getProduct).delete(deleteProduct).patch(updateProduct);

export default router;

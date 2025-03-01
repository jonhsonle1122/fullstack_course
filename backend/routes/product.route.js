import express from "express";
import {
  deleteProduct,
  getAllProducts,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";
const productRoutes = express.Router();

productRoutes.post("/", getProducts);
productRoutes.delete("/:id", deleteProduct);
productRoutes.get("/", getAllProducts);
productRoutes.post("/:id", updateProduct);

export default productRoutes;

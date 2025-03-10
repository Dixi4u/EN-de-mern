/*Este archivo sirve para definir que metodos del crud va a tener mi ruta(/api/products)*/ 

import express from "express";
import productsController from "../controllers/productsController.js";

const router = express.Router();

router.route("/")
.get(productsController.getProducts)
.post(productsController.insertProduct)

router.route("/:id")
.put(productsController.updateProducts)
.delete(productsController.deleteProduct)

export default router;
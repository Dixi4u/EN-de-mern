import express from "express"
import salesController from "../controllers/salesController.js";
// a ver

const router = express.Router()

router.route('/').get(salesController.getAllSales)
router.route('/').post(salesController.insertSales)

router.route('/getSalesByCategory').get(salesController.getSalesByCategory)
router.route('/getByMostSelledProducts').get(salesController.getMostSelledProducts)
router.route('/totalEarnings').get(salesController.totalEarnings)

export default router
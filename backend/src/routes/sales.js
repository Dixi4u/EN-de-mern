import express from "express"
import salesController from "../controllers/salesController"

const router = express.Router()

router.route('/').get(salesController, get)
router.route('/').post(salesController, post)

router.route('/getSalesByCategory').get(salesController.getSalesByCategory)
router.route('/getByMostSelledProducts').get(salesController.getMostSelledProducts)
router.route('/totalEarnings').get(salesController.totalEarnings)

export default router
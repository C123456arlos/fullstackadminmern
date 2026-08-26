import express from 'express'
const router = express.Router()
import {getCustomers, getProducts, getTransactions, getGeography} from '../controllers/client.js'
router.get('/products', getProducts)
router.get('/customers', getCustomers)
router.get('/transactions', getTransactions)
router.get('/geography', getGeography)

export default router
import express from "express"
import { placeOrder, userOrders, verifyOrder,listOrders, updateStatus } from "../controllers/orderContoller.js"
import auth from '../middleware/auth.js'



const orderRouter = express.Router()
orderRouter.post("/place", auth, placeOrder)
orderRouter.post('/verify',verifyOrder)
orderRouter.post('/userorders',auth,userOrders)
orderRouter.get('/list',listOrders)
orderRouter.post('/status',updateStatus)



export default orderRouter;
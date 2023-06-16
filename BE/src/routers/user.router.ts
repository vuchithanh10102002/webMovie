import userController from "../controllers/user.controller"
import tokenMiddleware from "../middleware/token.middleware";

import express from "express";

const router = express.Router();


router.post('/signup' ,userController.signup)
router.post("/signin",userController.signin)
router.get("/profile",tokenMiddleware.tokenAuth ,userController.profile)
// router.post("/refresh", userController.requestRefreshToken)
// router.post("/signout", tokenMiddleware.tokenAuth ,userController.signout)

export default router
import express from 'express';
const router = express.Router();

import { Signin, Signup, getUserData } from '../controllers/UserControllers.js';
import TokenVerification from '../middlewares/TokenVerification.js';

router.post("/signup", Signup);
router.post("/signin", Signin);
router.get("/user-data", TokenVerification, getUserData);

export default router;
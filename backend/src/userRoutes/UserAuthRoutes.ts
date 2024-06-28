import express from 'express';
const router = express.Router();

import { Signup ,Signin, getUserData } from '../userControllers/UserAuthControllers.js';
import TokenVerification from '../middlewares/TokenVerification.js';

router.post("/signup", Signup);
router.post("/signin", Signin);
router.get("/user-data", TokenVerification, getUserData);

export default router;
import express from 'express';
const router = express.Router();

import { Signin, Signup } from '../controllers/UserControllers.js';

router.post("/signup", Signup);
router.post("/signin", Signin);

export default router;
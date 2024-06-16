import express from "express";
import { AdminSignin, AdminSignup } from "../adminControllers/AdminAuthControllers.js";
const router = express.Router();

router.post("/admin-signup", AdminSignup);
router.post("/admin-signin", AdminSignin);

export default router;
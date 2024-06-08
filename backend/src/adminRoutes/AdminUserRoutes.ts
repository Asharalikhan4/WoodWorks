import express from "express";
const router = express.Router();

import { GetAllUser } from "../adminControllers/AdminUserControllers.js";

router.get("/all-users", GetAllUser);

export default router;
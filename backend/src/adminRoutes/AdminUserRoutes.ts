import express from "express";
const router = express.Router();

import { DeleteUser, GetAllUser } from "../adminControllers/AdminUserControllers.js";

router.get("/all-users", GetAllUser);
router.delete("/delete-user", DeleteUser);

export default router;
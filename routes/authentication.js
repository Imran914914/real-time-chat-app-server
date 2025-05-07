import express from "express";
import { auth } from "../controllers/Authentiction.js";

const router = express.Router();

router.post("/sign-up", auth.SignUp);
router.post("/sign-in", auth.SignIn);

export default router;

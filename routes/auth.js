import express from "express";
import authController from "../controllers/auth.js";

const authRoutes = express.Router();

authRoutes.get("/check", (req, res) => {
	authController.connectIonic(req,res);
});

export default authRoutes;

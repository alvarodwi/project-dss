import express from "express";
import { TOPSIS } from "../modules/TOPSIS/TOPSIS.presentation";

const router = express.Router();

// Endpoint untuk melakukan topsis
router.post("/topsis", TOPSIS);

export default router;

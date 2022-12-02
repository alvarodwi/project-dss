import express from "express";
import { TOPSIS } from "../modules/TOPSIS/TOPSIS.presentation";

const router = express.Router();

// link awal dari /users
// router.get("/", getUsers);
// router.post("/", createUser);
// router.get("/:id", getUserById);
// router.delete("/:id", deleteUser);
// router.patch("/:id", updateUser);
router.post("/topsis", TOPSIS);

export default router;

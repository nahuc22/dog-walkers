import { Router } from "express";
import { registerUser, loginUser } from "../controllers/userController";

const userRoutes = Router();

// localhost:3001/api/users/register
userRoutes.post("/register", registerUser);
// localhost:3001/api/users/login
userRoutes.post("/login", loginUser);

export default userRoutes;

    
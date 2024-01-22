import { Router } from "express";
const router = Router();

import { register, login, logout } from "../controllers/auth.js";

router
  .route("/register")
  .post(register)
  .get((req, res) => res.send("register"));

router
  .route("/login")
  .post(login)
  .get((req, res) => res.send("login"));

router.route("/logout").post(logout);

export default router;

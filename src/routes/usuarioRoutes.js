import express from "express";
import usuarioController from "../controllers/usuarioController.js";
import authMiddleware from '../middlewares/authMiddleware.js';

const routes = express.Router();

routes.post("/usuarios/registrar", usuarioController.registrarUsuario);
routes.post("/usuarios/login", usuarioController.logarUsuario);
routes.get("/usuarios/me", authMiddleware, usuarioController.obterUsuario);

export default routes;

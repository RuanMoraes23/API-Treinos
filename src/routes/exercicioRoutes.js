import express from "express";
import exercicioController from "../controllers/exercicioController.js";
import authMiddleware from "../middlewares/authMiddleware.js"; // Importe o middleware de autenticação

const routes = express.Router();

// Rotas de exercícios com middleware de autenticação
routes.post("/exercicios", authMiddleware, exercicioController.adicionarExercicio);
routes.get("/exercicios/:id", authMiddleware, exercicioController.listarExercicios);
routes.put("/exercicios/:id", authMiddleware, exercicioController.modificarExercicio);
routes.delete("/exercicios/:id", authMiddleware, exercicioController.deletarExercicio);

export default routes;

import express from "express";
import TreinoController from "../controllers/treinoController.js";
import authMiddleware from "../middlewares/authMiddleware.js"; // Importe o middleware de autenticação

const router = express.Router();

// Rota para cadastrar treinos
router.post("/treinos", authMiddleware, TreinoController.cadastraTreinos);

// Rota para listar todos os treinos
router.get("/treinos/:id", authMiddleware, TreinoController.listaTreinos);

// Rota para buscar um treino por ID
router.get("/treino/:id", authMiddleware, TreinoController.listaTreino);

// Rota para modificar um treino por ID
router.put("/treinos/:id", authMiddleware, TreinoController.modificaTreino);

// Rota para deletar um treino por ID
router.delete("/treinos/:id", authMiddleware, TreinoController.deletarTreino);

export default router;

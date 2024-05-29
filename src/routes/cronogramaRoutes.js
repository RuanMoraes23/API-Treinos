import express from "express";
import cronogramaController from "../controllers/cronogramaController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const routes = express.Router();

routes.post("/cronograma", authMiddleware, cronogramaController.cadastraCronograma);

routes.get("/cronogramas/:id", authMiddleware, cronogramaController.listaCronogramas);

routes.get("/cronograma/:id", cronogramaController.listaCronograma);

routes.delete("/cronograma/:id", cronogramaController.deletarCronograma);

routes.put("/cronograma/:id", cronogramaController.modificaCronograma);

export default routes;
import express from "express";
import treinoController from "../controllers/treinoController.js";

const routes = express.Router()

routes.post("/treino", treinoController.cadastraTreinos);

routes.get("/treino", treinoController.listaTreinos);

routes.get("/treino/:id", treinoController.listaTreino);

routes.put("/treino/:id", treinoController.modificaTreino);

routes.delete("/treino/:id", treinoController.deletarTreino);

export default routes;
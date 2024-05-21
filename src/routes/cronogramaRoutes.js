import express from "express";
import cronogramaController from "../controllers/cronogramaController.js";

const routes = express.Router();

routes.post("/cronograma", cronogramaController.cadastraCronograma);

routes.get("/cronograma", cronogramaController.listaCronogramas);

routes.get("/cronograma/:id", cronogramaController.listaCronograma);

routes.delete("/cronograma/:id", cronogramaController.deletarCronograma);

routes.put("/cronograma/:id", cronogramaController.modificaCronograma);

export default routes;
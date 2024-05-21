import express from "express";
import exercicioController from "../controllers/exercicioController.js";

const routes = express.Router();

routes.post("/exercicios", exercicioController.adicionarExercicio);

routes.get("/exercicios", exercicioController.listarExercicios);

routes.put("/exercicios/:id", exercicioController.modificarExercicio);

routes.delete("/exercicios/:id", exercicioController.deletarExercicio);

export default routes;
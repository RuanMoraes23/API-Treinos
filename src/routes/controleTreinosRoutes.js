import express from "express";
import controlePesoController from "../controllers/controlePesoController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const routes = express.Router();

routes.post("/controlePeso", authMiddleware, controlePesoController.cadastraControlePeso);

routes.get("/controlePeso/:id", authMiddleware, controlePesoController.buscaControlePeso);

export default routes;
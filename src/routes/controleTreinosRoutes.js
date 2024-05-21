import express from "express";
import controlePesoController from "../controllers/controlePesoController.js";

const routes = express.Router();

routes.post("/controlePeso", controlePesoController.cadastraControlePeso);

routes.get("/controlePeso", controlePesoController.buscaControlePeso);

export default routes;
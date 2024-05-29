import express from "express";
import exercicio from "./exercicioRoutes.js";
import treino from "./treinoRoutes.js"
import cronograma from "./cronogramaRoutes.js"
import controlePeso from "./controleTreinosRoutes.js";
import usuarioRoutes from "./usuarioRoutes.js"

const routes = (app) =>{
    app.route("/").get((req, res)=> res.status(200).send("Curso de node.js"));

    app.use(express.json(), exercicio, treino, cronograma, controlePeso, usuarioRoutes);
}

export default routes;
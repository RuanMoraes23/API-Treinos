import mongoose from "mongoose";
import { treinoSchema } from "./treino.js";
import cronogramaController from "../controllers/cronogramaController.js";

const cronogramaSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String },
    dias: [{
        diaDaSemana: { type: String, required: true },
        treino: treinoSchema
    }],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } // Referência ao usuário
}, {versionKey: false});

const cronograma = mongoose.model("cronograma", cronogramaSchema);

export { cronograma, cronogramaSchema };


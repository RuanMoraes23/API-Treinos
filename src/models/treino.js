import mongoose, { Schema, mongo } from "mongoose";
import { exercicioSchema } from "./exercicios.js";

const treinoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String },
    exercicios: [{
        idBlocoExercicio: {type: mongoose.Schema.Types.ObjectId},
        exercicio: { type: exercicioSchema },
        series: { type: Number },
        repeticoes: { type: Number },
        pausa: { type: String }
    }],
}, { versionKey: false });

const treino = mongoose.model("treinos", treinoSchema)

export { treino, treinoSchema };
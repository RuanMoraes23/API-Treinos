import mongoose from "mongoose";
import { exercicioSchema } from "./exercicios.js";

const treinoSchema = new mongoose.Schema({
    nome: { type: String },
    exercicios: [{
        idBlocoExercicio: { type: mongoose.Schema.Types.ObjectId },
        exercicio: { type: exercicioSchema },
        series: { type: Number },
        repeticoes: { type: Number },
        pausa: { type: String }
    }],
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true} // Adicionando referência ao usuário
}, { versionKey: false });

const treino = mongoose.model("Treino", treinoSchema);

export { treino, treinoSchema };
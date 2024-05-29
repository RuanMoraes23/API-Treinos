import mongoose, { Schema } from "mongoose";

const exercicioSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } // Referência ao usuário
}, { versionKey: false });

const idExercicio = mongoose.model("exercicios", exercicioSchema);

export { idExercicio, exercicioSchema };

import mongoose, { Schema } from "mongoose";

const exercicioSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true }
}, { versionKey: false } )

const idExercicio = mongoose.model("exercicios", exercicioSchema);

export {idExercicio, exercicioSchema};
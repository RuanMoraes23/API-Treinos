import mongoose from "mongoose";
import { cronogramaSchema } from "./cronograma.js";

const controlePesoSchema = new mongoose.Schema({
    data: { type: Date, required: true },
    controlePeso: {
        cronogramaID: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Cronograma' },
        diaDaSemana: { type: String, required: true },
        exercicios: [{
            exercicio: {
                nome: { type: String },
                series: [{
                    carga: { type: Number, required: true },
                    repeticao: { type: Number, required: true }
                }]
            }
        }]
    }
}, { versionKey: false });

const controlePeso = mongoose.model("controlePeso", controlePesoSchema);

export default controlePeso;

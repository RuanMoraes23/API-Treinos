import { treino } from "../models/treino.js";
import { idExercicio } from "../models/exercicios.js";

class treinoController {

    static async cadastraTreinos(req,res) {
        try {
            const treinoCompleto = req.body;
            const arraydeExercicios = {...treinoCompleto.exercicios};
            for (const exercicio in arraydeExercicios){
                const exercicioEncontrado = await idExercicio.findById(arraydeExercicios[exercicio].exercicio);
                arraydeExercicios[exercicio].exercicio = exercicioEncontrado;
            }
            const treinoCriado = await treino.create(treinoCompleto);
            res.status(201).json({ message: "criado com sucesso", treino: treinoCriado });
        } catch(erro){
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar treino`});
        }
    }
    static async listaTreinos (req,res){
        try {
            const listaDeTreinos = await treino.find({});
            res.status(200).json(listaDeTreinos);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao buscar treino`});
        }
    }
    static async listaTreino (req,res){
        const id = req.params.id;
        try {
            const treinoEncontrado = await treino.findById(id);
            res.status(200).json(treinoEncontrado);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao buscar treino`});
        }
    }
    static async modificaTreino (req,res){
        const id = req.params.id;
        const treinoModificado = req.body;
        console.log(treinoModificado);
        try {
            const arraydeExercicios = {...treinoModificado.exercicios};
            for (const exercicio in arraydeExercicios){
                const exercicioEncontrado = await idExercicio.findById(arraydeExercicios[exercicio].exercicio);
                arraydeExercicios[exercicio].exercicio = exercicioEncontrado;
            }
            await treino.findByIdAndUpdate(id, treinoModificado);
            res.status(201).json({ message: "treino atualizado com sucesso!" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao a treino`});
        }
    }
    static async deletarTreino (req,res) {
        const id = req.params.id;
        try {
            await treino.findByIdAndDelete(id);
            res.status(200).json({ message: "deletado com sucesso" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao a treino`});
        }
    }
}

export default treinoController;
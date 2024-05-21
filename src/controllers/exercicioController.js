import { idExercicio } from "../models/exercicios.js";

class exercicioController {

    static async adicionarExercicio (req,res) {
        try{
            const novoExercicio = await idExercicio.create(req.body);
            res.status(201).json({ message: "criado com sucesso", exercicio: novoExercicio });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar exercicio`});
        }
    }
    static async listarExercicios (req,res) {
        try{
            const exercicios = await idExercicio.find({});
            res.status(200).json({exercicios});
        } catch(erro){
            res.status(500).json({ message: `${erro.message} - exercicio não encontrado`});
        }
    }
    static async modificarExercicio (req,res){
        try{
            const id = req.params.id;
            await idExercicio.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "atualizado com sucesso" });
            
        }catch(erro){
            res.status(500).json({ message: `${erro.message} - exercicio não encontrado`});
        }
    }
    static async deletarExercicio (req,res){
        try{
            const id = req.params.id;
            await idExercicio.findByIdAndDelete(id);
            res.status(200).json({ message: "deletado com sucesso" });
        }catch(erro){
            res.status(500).json({ message: `${erro.message} - exercicio não encontrado`});
        }
    }
}

export default exercicioController;
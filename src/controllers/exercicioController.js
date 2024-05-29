import { idExercicio } from "../models/exercicios.js";
import authMiddleware from "../middlewares/authMiddleware.js"; // Importe o middleware de autenticação

class exercicioController {

    static async adicionarExercicio (req,res) {
        try{
            // Adicione req.user._id para vincular o exercício ao usuário autenticado
            req.body.userId = req.user._id;
            const novoExercicio = await idExercicio.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", exercicio: novoExercicio });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha ao cadastrar exercício`});
        }
    }

    static async listarExercicios (req,res) {
        try{
            // Use req.user._id para buscar apenas os exercícios do usuário autenticado
            const exercicios = await idExercicio.find({ userId: req.user._id });
            res.status(200).json({ exercicios });
        } catch(erro){
            res.status(500).json({ message: `${erro.message} - Exercício não encontrado`});
        }
    }

    static async modificarExercicio (req,res){
        try{
            const id = req.params.id;
            await idExercicio.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Atualizado com sucesso" });
            
        }catch(erro){
            res.status(500).json({ message: `${erro.message} - Exercício não encontrado`});
        }
    }

    static async deletarExercicio (req,res){
        try{
            const id = req.params.id;
            await idExercicio.findByIdAndDelete(id);
            res.status(200).json({ message: "Deletado com sucesso" });
        }catch(erro){
            res.status(500).json({ message: `${erro.message} - Exercício não encontrado`});
        }
    }
}

export default exercicioController;

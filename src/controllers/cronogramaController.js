import express from "express";
import { cronograma } from "../models/cronograma.js";
import { treino } from "../models/treino.js"

class cronogramaController {

    static async cadastraCronograma(req,res) {
        try {
            req.body.userId = req.user._id;
            const cronogramaCompleto = req.body;
            console.log('cronograma:',cronogramaCompleto)
            const arraydeTreinos = {...cronogramaCompleto.dias};
            for (const dia in arraydeTreinos){
                const treinoEncontrado = await treino.findById(arraydeTreinos[dia].treino);
                arraydeTreinos[dia].treino = treinoEncontrado;
            }
            const cronogramaCriado = await cronograma.create(cronogramaCompleto);
            res.status(201).json({ message: "criado com sucesso", cronograma: cronogramaCriado });
        } catch(erro){
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar treino`});
        }
    }
    static async listaCronogramas(req,res){
        try {
            const listadeCronogramas = await cronograma.find({ userId: req.user._id });
            res.status(200).json({ message: "Lista de cronogramas", listadeCronogramas });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao listar cronograma`});
        }
    }
    static async listaCronograma(req,res){
        const id = req.params.id;
        try {
            const cronogramaEncontrado = await cronograma.findById(id);
            res.status(200).json({ message: "Cronograma:", cronogramaEncontrado });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao listar cronograma`});
        }
    }
    static async deletarCronograma(req,res) {
        const id = req.params.id;
        try {
            await cronograma.findByIdAndDelete(id);
            res.status(200).json({ message: "deletado com sucesso" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao deletar cronograma`});
        }
    }
    static async modificaCronograma(req,res) {
        const id = req.params.id;
        const cronogramaCompleto = req.body;
        const arraydeTreinos = {...cronogramaCompleto.dias};
        try {       
            for (const dia in arraydeTreinos){
                const treinoEncontrado = await treino.findById(arraydeTreinos[dia].treino);
                arraydeTreinos[dia].treino = treinoEncontrado;
            }
            await cronograma.findByIdAndUpdate(id, cronogramaCompleto);
            res.status(201).json({ message: "atualizado com sucesso" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao modificar cronograma`});
        }
    }
}

export default cronogramaController;
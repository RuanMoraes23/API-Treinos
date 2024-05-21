import express from "express";
import controlePeso from "../models/controlePeso.js";

class ControlePesoController {

    static async cadastraControlePeso(req, res) {
        try {
            const controlePesoCompleto = req.body;

            // Validar dados antes de criar o documento
            if (!controlePesoCompleto.data || !controlePesoCompleto.controlePeso) {
                return res.status(400).json({ message: "Dados incompletos. Por favor, forneça todos os campos necessários." });
            }

            const controlePesoCriado = await controlePeso.create(controlePesoCompleto);
            res.status(201).json({ message: "Criado com sucesso", controlePesoCriado });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha ao cadastrar treino` });
        }
    }

    static async buscaControlePeso(req, res){
            try {
                const listaControleDePesos = await controlePeso.find({});
                res.status(200).json({listaControleDePesos});
            } catch (error) {
                res.status(500).json({ message: `${error.message} - falha ao listar controle de peso`});
            }
        }
    }
export default ControlePesoController;

import { treino } from "../models/treino.js";
import { idExercicio } from "../models/exercicios.js";

class TreinoController {
  static async cadastraTreinos(req, res) {
    try {
      const userId = req.user.id; // Obtém o ID do usuário autenticado
      const treinoCompleto = { ...req.body, userId }; // Adiciona o ID do usuário ao treino
      const arraydeExercicios = { ...treinoCompleto.exercicios };
      for (const exercicio in arraydeExercicios) {
        const exercicioEncontrado = await idExercicio.findById(
          arraydeExercicios[exercicio].exercicio
        );
        arraydeExercicios[exercicio].exercicio = exercicioEncontrado;
      }
      const treinoCriado = await treino.create(treinoCompleto);
      console.log('treino:',treinoCriado)
      res.status(201).json({ message: "Treino criado com sucesso", treino: treinoCriado });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao cadastrar treino` });
    }
  }

  static async listaTreinos(req, res) {
    try {
      const userId = req.user._id; // Obtém o ID do usuário autenticado
      console.log('usuário autenticado: ', userId)
      const listaDeTreinos = await treino.find({ usuario: userId });
      res.status(200).json(listaDeTreinos);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao buscar treinos` });
    }
  }

  static async listaTreino(req, res) {
    const id = req.params.id;
    try {
      const userId = req.user.id; // Obtém o ID do usuário autenticado
      const treinoEncontrado = await treino.findOne({ _id: id, userId });
      res.status(200).json(treinoEncontrado);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao buscar treino` });
    }
  }

  static async modificaTreino(req, res) {
    const id = req.params.id;
    const treinoModificado = req.body;
    try {
      const userId = req.user.id; // Obtém o ID do usuário autenticado
      const arraydeExercicios = { ...treinoModificado.exercicios };
      for (const exercicio in arraydeExercicios) {
        const exercicioEncontrado = await idExercicio.findById(
          arraydeExercicios[exercicio].exercicio
        );
        arraydeExercicios[exercicio].exercicio = exercicioEncontrado;
      }
      await treino.findOneAndUpdate({ _id: id, userId }, treinoModificado);
      res.status(200).json({ message: "Treino atualizado com sucesso" });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao atualizar treino` });
    }
  }

  static async deletarTreino(req, res) {
    const _id = req.params.id;
    try {
      await treino.findOneAndDelete({ _id });
      res.status(200).json({ message: "Treino deletado com sucesso" });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao deletar treino` });
    }
  }
}

export default TreinoController;

import { Usuario } from "../models/usuarios.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

class usuarioController {

    static async registrarUsuario(req, res) {
        try {
            const { nome, email, senha } = req.body;
            const novoUsuario = await Usuario.create({ nome, email, senha });
            res.status(201).json({ message: "Usuário criado com sucesso", usuario: novoUsuario });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar usuário` });
        }
    }

    static async logarUsuario(req, res) {
        try {
            const { email, senha } = req.body;
            const usuario = await Usuario.findOne({ email });

            if (!usuario) {
                return res.status(400).json({ message: "Email ou senha incorretos" });
            }

            const senhaValida = await bcrypt.compare(senha, usuario.senha);
            if (!senhaValida) {
                return res.status(400).json({ message: "Email ou senha incorretos" });
            }

            const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
            res.status(200).json({ token, usuario: { id: usuario._id, nome: usuario.nome, email: usuario.email } });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao logar usuário` });
        }
    }

    static async obterUsuario(req, res) {
        try {
            const usuario = await Usuario.findById(req.userId).select('-senha');
            if (!usuario) {
                return res.status(404).json({ message: "Usuário não encontrado" });
            }
            res.status(200).json({ usuario });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao obter usuário` });
        }
    }
}

export default usuarioController;

import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { Usuario } from "../models/usuarios.js"; // Supondo que o modelo de usuário seja exportado como 'Usuario'
import bcrypt from 'bcryptjs';

dotenv.config();

const authMiddleware = async (req, res, next) => {
    const authorizationHeader = req.header('Authorization');
    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "Acesso negado - Token não fornecido" });
    }

    const token = authorizationHeader.replace('Bearer ', '');
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const user = await Usuario.findById(decodedToken.id);
        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }
        console.log(user)
        req.user = user;
        req.userId = decodedToken.id;
        next();
    } catch (error) {
        res.status(400).json({ message: "Token inválido" });
    }
};

export default authMiddleware;
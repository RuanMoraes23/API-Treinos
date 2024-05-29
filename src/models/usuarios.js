import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcryptjs';

const usuarioSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true }
}, { versionKey: false });

usuarioSchema.pre('save', async function(next) {
    if (!this.isModified('senha')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.senha = await bcrypt.hash(this.senha, salt);
    next();
});

const Usuario = mongoose.model("usuarios", usuarioSchema);

export { Usuario, usuarioSchema };

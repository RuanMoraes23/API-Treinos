import mongoose from "mongoose";

async function conectaBanco() {
    mongoose.connect("mongodb+srv://ruanscaranolol:NFONFgs2bSb2bqr5@cluster0.fgpqt7z.mongodb.net/projetoTreino?retryWrites=true&w=majority&appName=Cluster0")

    return mongoose.connection;
};

export default conectaBanco;
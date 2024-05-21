import express from "express";
import conectaBanco from "./config/dbConnect.js";
import cors from "cors";
import routes from "./routes/index.js";

const conexao = await conectaBanco();


conexao.on("error",(erro) =>{
    console.error('erro de conexão:', erro);
})
 
conexao.once("open", () => {
    console.log('Conexão com o banco de dados feita com sucesso!')
})

const app = express();
app.use(cors());
routes(app);

export default app;

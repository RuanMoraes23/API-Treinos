// import http from "http";
import app from './src/app.js';

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`);
})

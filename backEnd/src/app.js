import express from "express";
import cors from "cors";
import conectaNaDatabase from "./config/dbConnection.js";
import routes from "./routes/index.js";

// Para fazer a conexão com o banco de dados
conectaNaDatabase()
    .then(() => {
        console.log("Conexão realizada com sucesso!");
    })
    .catch((erro) => {
        console.log("Erro ao conectar no banco de dados. Erro: ", erro);
    });

// Middleware para verificar se o servidor está rodando
const app = express();

// Adicione o middleware CORS
app.use(cors());

app.use(express.json());
routes(app);

export default app;
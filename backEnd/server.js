import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Simulando um banco de dados temporário (array de usuários)
let users = [];

// Rota para cadastrar usuário
app.post("/cadastro", (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios!" });
    }

    const novoUsuario = { id: users.length + 1, nome, email, senha };
    users.push(novoUsuario);

    res.status(201).json({ message: "Usuário cadastrado com sucesso!", usuario: novoUsuario });
});

// Rota para listar usuários cadastrados
app.get("/usuarios", (req, res) => {
    res.json(users);
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

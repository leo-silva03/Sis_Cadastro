import express from "express";
import cadastroController from "../controllers/cadastroController.js";

const routes = express.Router();

routes.get("/dados", cadastroController.listarCadastros); // Adiciona a rota de listagem
routes.get("/dados/:id", cadastroController.buscarCadastroPorId); // Adiciona a rota de busca por ID
routes.post("/dados", cadastroController.criarCadastro); // Adiciona a rota de criação
routes.put("/dados/:id", cadastroController.atualizarCadastro); // Adiciona a rota de atualização
routes.delete("/dados/:id", cadastroController.deletarCadastro); // Adiciona a rota de deleção
routes.post("/login", cadastroController.login); // Adiciona a rota de login
routes.get("/dados/email/:email", cadastroController.buscarCadastroPorEmail); // Adiciona a rota de busca por e-mail

export default routes;
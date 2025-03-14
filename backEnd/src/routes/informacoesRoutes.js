import express from "express";
import cadastroController from "../controllers/cadastroController.js";

const routes = express.Router();

routes.get("/dados", cadastroController.listarCadastros);
routes.get("/dados/:id", cadastroController.buscarCadastroPorId);
routes.post("/dados", cadastroController.criarCadastro);
routes.put("/dados/:id", cadastroController.atualizarCadastro);
routes.delete("/dados/:id", cadastroController.deletarCadastro);
routes.post("/login", cadastroController.login); // Adiciona a rota de login

export default routes;
import express from "express";
import informacoesRoutes from "./informacoesRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send("API em Execução!");
    });
    app.use(express.json());

    // Use as rotas definidas em informacoesRoutes.js
    app.use("/", informacoesRoutes);
};

export default routes;
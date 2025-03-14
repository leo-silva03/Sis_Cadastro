import mongoose from "mongoose";

const informacoesSchema = new mongoose.Schema({
    Email: { type: String, required: true },
    Nome: { type: String, required: true },
    Senha: { type: String, required: true },
}, { versionKey: false });

const informacoes = mongoose.model("informacoes", informacoesSchema);

export default informacoes;
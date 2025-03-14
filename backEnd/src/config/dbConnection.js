import mongoose from "mongoose";

async function conectaNaDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Conexão com o banco de dados realizada com sucesso!");
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
        process.exit(1); // Encerra a aplicação em caso de erro crítico
    }
    return mongoose.connection;
}

export default conectaNaDatabase;

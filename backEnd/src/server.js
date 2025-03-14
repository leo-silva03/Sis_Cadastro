import "dotenv/config";
import app from "./app.js";
const PORT = process.env.PORT || 3000;

// Para rodar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
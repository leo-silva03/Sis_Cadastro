import informacoes from "../models/informacoes.js";

// Controller para organizar o CRUD de cadastro
class cadastroController {
    // Criar um novo cadastro
    static async criarCadastro(req, res) {
        try {
            const novaInformacao = new informacoes(req.body);
            await novaInformacao.save();
            res.status(201).send({ message: "Usuário cadastrado com sucesso!" });
        } catch (error) {
            res.status(500).send({ message: "Erro ao cadastrar usuário.", error });
        }
    }

    // Listar todos os cadastros
    static async listarCadastros(req, res) {
        try {
            const cadastros = await informacoes.find();
            res.status(200).json(cadastros);
        } catch (error) {
            res.status(500).send({ message: "Erro ao listar cadastros.", error });
        }
    }

    // Buscar um cadastro por ID
    static async buscarCadastroPorId(req, res) {
        try {
            const cadastro = await informacoes.findById(req.params.id);
            if (cadastro) {
                res.status(200).json(cadastro);
            } else {
                res.status(404).send({ message: "Cadastro não encontrado." });
            }
        } catch (error) {
            res.status(500).send({ message: "Erro ao buscar cadastro.", error });
        }
    }

    // Atualizar um cadastro por ID
    static async atualizarCadastro(req, res) {
        try {
            const cadastroAtualizado = await informacoes.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (cadastroAtualizado) {
                res.status(200).json(cadastroAtualizado);
            } else {
                res.status(404).send({ message: "Cadastro não encontrado." });
            }
        } catch (error) {
            res.status(500).send({ message: "Erro ao atualizar cadastro.", error });
        }
    }

    // Deletar um cadastro por ID
    static async deletarCadastro(req, res) {
        try {
            const cadastroDeletado = await informacoes.findByIdAndDelete(req.params.id);
            if (cadastroDeletado) {
                res.status(200).send({ message: "Cadastro deletado com sucesso!" });
            } else {
                res.status(404).send({ message: "Cadastro não encontrado." });
            }
        } catch (error) {
            res.status(500).send({ message: "Erro ao deletar cadastro.", error });
        }
    }

    // Login de usuário
    static async login(req, res) {
        try {
            const { email, senha } = req.body;
            const usuario = await informacoes.findOne({ Email: email, Senha: senha });
            if (usuario) {
                res.status(200).send({ message: "Login realizado com sucesso!" });
            } else {
                res.status(401).send({ message: "E-mail ou senha incorretos." });
            }
        } catch (error) {
            res.status(500).send({ message: "Erro ao realizar login.", error });
        }
    }
}

export default cadastroController;
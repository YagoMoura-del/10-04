const alunoModel = require('../models/alunoModel');
// SECURITY: Import validation helpers to enforce proper formats on email and CPF inputs.
const { isValidEmail, isValidCPF } = require('../utils/validation');

exports.getAlunos = async (req, res) => {
    try {
        const alunos = await alunoModel.findAll();
        res.json(alunos);
    } catch (err) {
        console.error('Erro ao buscar alunos: ', err);
        res.status(500).json({ error: 'Erro interno ao buscar alunos' });
    }
};

exports.createAluno = async (req, res) => {
    const { id_turma, nome_completo, cpf, data_nascimento, email } = req.body;
    if (!id_turma || !nome_completo || !cpf || !data_nascimento || !email) {
        return res.status(400).json({ error: "Todos os campos do aluno são obrigatórios" });
    }

    // SECURITY: Validate email and CPF formats strictly on creation to prevent malformed/malicious input
    if (!isValidEmail(email)) {
        return res.status(400).json({ error: "Formato de email inválido" });
    }
    if (!isValidCPF(cpf)) {
        return res.status(400).json({ error: "Formato de CPF inválido" });
    }

    try {
        const newAluno = await alunoModel.create(id_turma, nome_completo, cpf, data_nascimento, email);
        res.status(201).json(newAluno);
    } catch (err) {
        console.error('Erro ao criar aluno', err);
        res.status(500).json({ error: "Erro interno ao criar aluno" });
    }
};

exports.updateAluno = async (req, res) => {
    const { id } = req.params;
    const { id_turma, nome_completo, cpf, data_nascimento, email } = req.body;
    
    if (!id_turma || !nome_completo || !cpf || !data_nascimento || !email) {
        return res.status(400).json({ error: 'Todos os campos são necessários para atualização.' });
    }

    // SECURITY: Validate email and CPF formats strictly on update to prevent malformed/malicious input
    if (!isValidEmail(email)) {
        return res.status(400).json({ error: "Formato de email inválido" });
    }
    if (!isValidCPF(cpf)) {
        return res.status(400).json({ error: "Formato de CPF inválido" });
    }

    try {
        const updated = await alunoModel.update(id, id_turma, nome_completo, cpf, data_nascimento, email);
        // SECURITY: node-postgres returns an array. Empty results are evaluated as a truthy empty array ([]) in JavaScript. Must check for length === 0.
        if (!updated || updated.length === 0) return res.status(404).json({ error: 'Aluno não encontrado.' });
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: 'Erro interno ao atualizar aluno' });
    }
};

exports.deleteAluno = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await alunoModel.delete(id);
        // SECURITY: node-postgres returns an array. Empty results are evaluated as a truthy empty array ([]) in JavaScript. Must check for length === 0.
        if (!deleted || deleted.length === 0) return res.status(404).json({ error: "Aluno não encontrado" });
        res.json({ message: "Aluno removido com sucesso" });
    } catch (err) {
        res.status(500).json({ error: "Erro interno ao deletar aluno" });
    }
};
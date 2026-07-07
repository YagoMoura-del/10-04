const turmaModel = require('../models/turmaModel');

exports.getTurmas = async (req, res) => {
    try {
        const turmas = await turmaModel.findAll();
        res.json(turmas);
    } catch (err) {
        console.error('Erro ao buscar turmas: ', err);
        res.status(500).json({ error: 'Erro interno ao buscar turmas' });
    }
};

exports.createTurma = async (req, res) => {
    const { id_curso, ano_letivo, periodo } = req.body;
    if (!id_curso || !ano_letivo || !periodo) {
        return res.status(400).json({ error: "Os campos id_curso, ano_letivo e periodo são obrigatórios" });
    }
    try {
        const newTurma = await turmaModel.create(id_curso, ano_letivo, periodo);
        res.status(201).json(newTurma);
    } catch (err) {
        console.error('Erro ao criar turma', err);
        res.status(500).json({ error: "Erro interno ao criar turma" });
    }
};

exports.updateTurma = async (req, res) => {
    const { id } = req.params;
    const { id_curso, ano_letivo, periodo } = req.body;
    if (!id_curso || !ano_letivo || !periodo) {
        return res.status(400).json({ error: 'Todos os campos são necessários para atualização.' });
    }
    try {
        const updated = await turmaModel.update(id, id_curso, ano_letivo, periodo);
        // SECURITY: node-postgres returns an empty array if no rows match.
        if (!updated || updated.length === 0) return res.status(404).json({ error: 'Turma não encontrada.' });
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: 'Erro interno ao atualizar turma' });
    }
};

exports.deleteTurma = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await turmaModel.delete(id);
        // SECURITY: node-postgres returns an empty array if no rows match.
        if (!deleted || deleted.length === 0) return res.status(404).json({ error: "Turma não encontrada" });
        res.json({ message: "Turma removida com sucesso" });
    } catch (err) {
        res.status(500).json({ error: "Erro interno ao deletar turma" });
    }
};
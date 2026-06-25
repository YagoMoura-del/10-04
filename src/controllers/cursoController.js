const cursoModel = require('../models/cursoModel');

exports.getCursos = async (req, res) => {
    try {
        const cursos = await cursoModel.findAll();
        res.json(cursos);
    } catch (err) {
        console.error('Erro ao buscar cursos: ', err);
        res.status(500).json({ error: 'Erro interno ao buscar cursos' });
    }
};

exports.createCurso = async (req, res) => {
    const { nome_curso } = req.body;
    if (!nome_curso) {
        return res.status(400).json({ error: "O campo nome_curso é obrigatório" });
    }
    try {
        const newCurso = await cursoModel.create(nome_curso);
        res.status(201).json(newCurso[0]);
    } catch (err) {
        console.error('Erro ao criar curso', err);
        res.status(500).json({ error: "Erro interno ao criar curso" });
    }
};

exports.updateCurso = async (req, res) => {
    const { id } = req.params;
    const { nome_curso } = req.body;
    if (!nome_curso) {
        return res.status(400).json({ error: 'O campo nome_curso é necessário para atualização.' });
    }
    try {
        const updatedCurso = await cursoModel.update(id, nome_curso);
        if (updatedCurso.length === 0) {
            return res.status(404).json({ error: 'Curso não encontrado.' });
        }
        res.json(updatedCurso[0]);
    } catch (err) {
        console.error('Erro ao atualizar curso:', err);
        res.status(500).json({ error: 'Erro interno ao atualizar curso' });
    }
};

exports.deleteCurso = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await cursoModel.delete(id);
        if (deleted.length === 0) {
            return res.status(404).json({ error: "Curso não encontrado para exclusão" });
        }
        res.json({ message: "Curso removido com sucesso", curso: deleted[0] });
    } catch (err) {
        console.error("Erro ao deletar curso", err);
        res.status(500).json({ error: "Erro interno ao deletar curso" });
    }
};
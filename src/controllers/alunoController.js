const alunoModel = require("../models/alunoModel");
const { isValidEmail, isValidCpf } = require("../utils/validation");

exports.getAlunos = async (req, res) => {
  try {
    const alunos = await alunoModel.findAll();
    res.json(alunos);
  } catch (err) {
    console.error("Erro ao buscar alunos: ", err);
    res.status(500).json({ error: "Erro interno ao buscar alunos" });
  }
};

exports.createAluno = async (req, res) => {
  const { id_turma, nome_completo, cpf, data_nascimento, email } = req.body;
  if (!id_turma || !nome_completo || !cpf || !data_nascimento || !email) {
    return res
      .status(400)
      .json({ error: "Todos os campos do aluno são obrigatórios" });
  }
  // SECURITY: Validate input formats of email and cpf before performing db operations.
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Formato de e-mail inválido" });
  }
  if (!isValidCpf(cpf)) {
    return res.status(400).json({ error: "Formato de CPF inválido" });
  }
  try {
    const newAluno = await alunoModel.create(
      id_turma,
      nome_completo,
      cpf,
      data_nascimento,
      email,
    );
    // SECURITY: node-postgres returns an empty array if no match/no insertion was successful.
    if (!newAluno || newAluno.length === 0) {
      return res.status(400).json({ error: "Não foi possível criar o aluno" });
    }
    res.status(201).json(newAluno[0]);
  } catch (err) {
    console.error("Erro ao criar aluno", err);
    res.status(500).json({ error: "Erro interno ao criar aluno" });
  }
};

exports.updateAluno = async (req, res) => {
  const { id } = req.params;
  const { id_turma, nome_completo, cpf, data_nascimento, email } = req.body;

  if (!id_turma || !nome_completo || !cpf || !data_nascimento || !email) {
    return res
      .status(400)
      .json({ error: "Todos os campos são necessários para atualização." });
  }
  // SECURITY: Validate input formats of email and cpf before performing db operations.
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Formato de e-mail inválido" });
  }
  if (!isValidCpf(cpf)) {
    return res.status(400).json({ error: "Formato de CPF inválido" });
  }

  try {
    const updated = await alunoModel.update(
      id,
      id_turma,
      nome_completo,
      cpf,
      data_nascimento,
      email,
    );
    // SECURITY: node-postgres returns an empty array for no matches, which is truthy in JS.
    if (!updated || updated.length === 0)
      return res.status(404).json({ error: "Aluno não encontrado." });
    res.json(updated[0]);
  } catch (err) {
    res.status(500).json({ error: "Erro interno ao atualizar aluno" });
  }
};

exports.deleteAluno = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await alunoModel.delete(id);
    // SECURITY: node-postgres returns an empty array for no matches, which is truthy in JS.
    if (!deleted || deleted.length === 0)
      return res.status(404).json({ error: "Aluno não encontrado" });
    res.json({ message: "Aluno removido com sucesso" });
  } catch (err) {
    res.status(500).json({ error: "Erro interno ao deletar aluno" });
  }
};

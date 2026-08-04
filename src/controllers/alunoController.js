const alunoModel = require("../models/alunoModel");
// SECURITY: Import security validation helpers
const { isValidEmail, isValidCPF } = require("../utils/validation");

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
  // SECURITY: Validate format of CPF and Email to prevent invalid/unsafe payloads
  if (!isValidCPF(cpf)) {
    return res.status(400).json({ error: "Formato de CPF inválido" });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Formato de email inválido" });
  }
  try {
    const newAluno = await alunoModel.create(
      id_turma,
      nome_completo,
      cpf,
      data_nascimento,
      email,
    );
    res.status(201).json(newAluno);
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
  // SECURITY: Validate format of CPF and Email during updates
  if (!isValidCPF(cpf)) {
    return res.status(400).json({ error: "Formato de CPF inválido" });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Formato de email inválido" });
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
    // SECURITY: Check for empty array response because node-postgres returns an empty array which is truthy in JavaScript
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
    // SECURITY: Check for empty array response because node-postgres returns an empty array which is truthy in JavaScript
    if (!deleted || deleted.length === 0)
      return res.status(404).json({ error: "Aluno não encontrado" });
    res.json({ message: "Aluno removido com sucesso" });
  } catch (err) {
    res.status(500).json({ error: "Erro interno ao deletar aluno" });
  }
};

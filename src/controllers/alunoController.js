const alunoModel = require("../models/alunoModel");
// SECURITY: Require input validation utilities to validate email and CPF format constraints.
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

  // SECURITY: Validate CPF format to prevent injection or malformed data storage.
  if (!isValidCpf(cpf)) {
    return res
      .status(400)
      .json({
        error:
          "CPF inválido. Use 11 dígitos numéricos ou o formato 000.000.000-00.",
      });
  }

  // SECURITY: Validate email format to enforce basic valid syntax.
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "E-mail inválido." });
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

  // SECURITY: Validate CPF format during updates.
  if (!isValidCpf(cpf)) {
    return res
      .status(400)
      .json({
        error:
          "CPF inválido. Use 11 dígitos numéricos ou o formato 000.000.000-00.",
      });
  }

  // SECURITY: Validate email format during updates.
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "E-mail inválido." });
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
    if (!updated || updated.length === 0)
      return res.status(404).json({ error: "Aluno não encontrado." });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Erro interno ao atualizar aluno" });
  }
};

exports.deleteAluno = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await alunoModel.delete(id);
    if (!deleted || deleted.length === 0)
      return res.status(404).json({ error: "Aluno não encontrado" });
    res.json({ message: "Aluno removido com sucesso" });
  } catch (err) {
    res.status(500).json({ error: "Erro interno ao deletar aluno" });
  }
};

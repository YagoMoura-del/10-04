const pool = require("../config/database");

exports.findAll = async () => {
  const text =
    "SELECT id_aluno, id_turma, nome_completo, cpf, data_nascimento, email FROM alunos ORDER BY id_aluno";
  const result = await pool.query(text);
  return result.rows;
};

exports.create = async (
  id_turma,
  nome_completo,
  cpf,
  data_nascimento,
  email,
) => {
  const text = `INSERT INTO alunos (id_turma, nome_completo, cpf, data_nascimento, email)
                  VALUES ($1, $2, $3, $4, $5) RETURNING *`;
  const values = [id_turma, nome_completo, cpf, data_nascimento, email];
  const result = await pool.query(text, values);
  return result.rows;
};

exports.update = async (
  id,
  id_turma,
  nome_completo,
  cpf,
  data_nascimento,
  email,
) => {
  const text = `UPDATE alunos
                  SET id_turma = $1, nome_completo = $2, cpf = $3, data_nascimento = $4, email = $5 
                  WHERE id_aluno = $6 RETURNING *`;
  const values = [id_turma, nome_completo, cpf, data_nascimento, email, id];
  const result = await pool.query(text, values);
  return result.rows;
};

exports.delete = async (id) => {
  const text = "DELETE FROM alunos WHERE id_aluno = $1 RETURNING *";
  const result = await pool.query(text, [id]);
  return result.rows;
};

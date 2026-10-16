const pool = require("../config/database");

exports.findAll = async () => {
  const text =
    "SELECT id_turma, id_curso, ano_letivo, periodo FROM turmas ORDER BY id_turma";
  const result = await pool.query(text);
  return result.rows;
};

exports.create = async (id_curso, ano_letivo, periodo) => {
  const text = `INSERT INTO turmas (id_curso, ano_letivo, periodo)
                  VALUES ($1, $2, $3) RETURNING *`;
  const values = [id_curso, ano_letivo, periodo];
  const result = await pool.query(text, values);
  return result.rows;
};

exports.update = async (id, id_curso, ano_letivo, periodo) => {
  const text = `UPDATE turmas SET id_curso = $1, ano_letivo = $2, periodo = $3
                  WHERE id_turma = $4 RETURNING *`;
  const values = [id_curso, ano_letivo, periodo, id];
  const result = await pool.query(text, values);
  return result.rows;
};

exports.delete = async (id) => {
  const text = "DELETE FROM turmas WHERE id_turma = $1 RETURNING *";
  const result = await pool.query(text, [id]);
  return result.rows;
};

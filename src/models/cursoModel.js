const pool = require("../config/database");

exports.findAll = async () => {
  const text = "SELECT id_curso, nome_curso FROM cursos ORDER BY id_curso";
  const result = await pool.query(text);
  return result.rows;
};

exports.create = async (nome_curso) => {
  const text = "INSERT INTO cursos (nome_curso) VALUES ($1) RETURNING *";
  const values = [nome_curso];
  const result = await pool.query(text, values);
  return result.rows;
};

exports.update = async (id, nome_curso) => {
  const text =
    "UPDATE cursos SET nome_curso = $1 WHERE id_curso = $2 RETURNING *";
  const values = [nome_curso, id];
  const result = await pool.query(text, values);
  return result.rows;
};

exports.delete = async (id) => {
  const text = "DELETE FROM cursos WHERE id_curso = $1 RETURNING *";
  const values = [id];
  const result = await pool.query(text, values);
  return result.rows;
};

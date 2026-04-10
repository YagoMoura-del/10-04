const express = require('express');
const router = express.Router();

const cursoController = require('../controllers/cursoController');
const turmaController = require('../controllers/turmaController');
const alunoController = require('../controllers/alunoController');

// CURSOS
router.get('/cursos', cursoController.getCursos);

router.post('/cursos', cursoController.createCurso);

router.put('/cursos/:id', cursoController.updateCurso);

router.delete('/cursos/:id', cursoController.deleteCurso);

//TURMAS 
router.get('/turmas', turmaController.getTurmas);

router.post('/turmas', turmaController.createTurma);

router.put('/turmas/:id', turmaController.updateTurma);

router.delete('/turmas/:id', turmaController.deleteTurma);

//ALUNOS
router.get('/alunos', alunoController.getAlunos);

router.post('/alunos', alunoController.createAluno);

router.put('/alunos/:id', alunoController.updateAluno);

router.delete('/alunos/:id', alunoController.deleteAluno);

module.exports = router;
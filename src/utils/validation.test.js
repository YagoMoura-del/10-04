const test = require('node:test');
const assert = require('node:assert/strict');
const { isValidEmail, isValidCpf } = require('./validation');

test('isValidEmail accepts valid email addresses', () => {
  assert.equal(isValidEmail('user@example.com'), true);
  assert.equal(isValidEmail('aluno.test@escola.edu.br'), true);
});

test('isValidEmail rejects invalid email addresses', () => {
  assert.equal(isValidEmail('invalid-email'), false);
  assert.equal(isValidEmail('user@'), false);
  assert.equal(isValidEmail('@example.com'), false);
  assert.equal(isValidEmail(null), false);
  assert.equal(isValidEmail(123), false);
});

test('isValidCpf accepts valid CPF formats', () => {
  assert.equal(isValidCpf('12345678900'), true);
  assert.equal(isValidCpf('123.456.789-00'), true);
});

test('isValidCpf rejects invalid CPF formats', () => {
  assert.equal(isValidCpf('12345'), false);
  assert.equal(isValidCpf('123.456.789-000'), false);
  assert.equal(isValidCpf('abc.def.ghi-jk'), false);
  assert.equal(isValidCpf(null), false);
  assert.equal(isValidCpf(undefined), false);
});

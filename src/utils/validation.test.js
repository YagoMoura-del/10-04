const test = require('node:test');
const assert = require('node:assert');
const { isValidEmail, isValidCPF } = require('./validation');

test('isValidEmail accepts valid email addresses', () => {
  assert.strictEqual(isValidEmail('aluno@escola.com'), true);
  assert.strictEqual(isValidEmail('user.name+tag@domain.co.uk'), true);
});

test('isValidEmail rejects invalid email addresses', () => {
  assert.strictEqual(isValidEmail('invalid-email'), false);
  assert.strictEqual(isValidEmail('@domain.com'), false);
  assert.strictEqual(isValidEmail('user@'), false);
  assert.strictEqual(isValidEmail(null), false);
  assert.strictEqual(isValidEmail(123), false);
});

test('isValidCPF accepts valid CPF formats', () => {
  assert.strictEqual(isValidCPF('12345678901'), true);
  assert.strictEqual(isValidCPF('123.456.789-01'), true);
});

test('isValidCPF rejects invalid CPF formats', () => {
  assert.strictEqual(isValidCPF('12345'), false);
  assert.strictEqual(isValidCPF('123.456.789-0'), false);
  assert.strictEqual(isValidCPF('abc45678901'), false);
  assert.strictEqual(isValidCPF(null), false);
  assert.strictEqual(isValidCPF(undefined), false);
});

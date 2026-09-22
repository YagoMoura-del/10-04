const test = require("node:test");
const assert = require("node:assert/strict");
const { isValidEmail, isValidCPF } = require("./validation");

test("isValidEmail", async (t) => {
  await t.test("valid emails", () => {
    assert.equal(isValidEmail("user@example.com"), true);
    assert.equal(isValidEmail("aluno.sobrenome@escola.edu.br"), true);
  });

  await t.test("invalid emails", () => {
    assert.equal(isValidEmail("invalid-email"), false);
    assert.equal(isValidEmail("user@com"), false);
    assert.equal(isValidEmail("@example.com"), false);
    assert.equal(isValidEmail(12345), false);
    assert.equal(isValidEmail(null), false);
  });
});

test("isValidCPF", async (t) => {
  await t.test("valid CPFs", () => {
    assert.equal(isValidCPF("12345678901"), true);
    assert.equal(isValidCPF("123.456.789-01"), true);
  });

  await t.test("invalid CPFs", () => {
    assert.equal(isValidCPF("12345"), false);
    assert.equal(isValidCPF("123.456.789-0"), false);
    assert.equal(isValidCPF("abc.def.ghi-jk"), false);
    assert.equal(isValidCPF(null), false);
  });
});

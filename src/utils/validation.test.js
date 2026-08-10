const assert = require("assert");
const { isValidEmail, isValidCpf } = require("./validation");

// SECURITY: Unit tests for security-related input validation helper methods to ensure correctness.

console.log("Iniciando os testes de validação de segurança...");

try {
  // Testes de validação de e-mail
  console.log("- Testando isValidEmail...");
  assert.strictEqual(
    isValidEmail("test@example.com"),
    true,
    "Deveria aceitar email válido padrão",
  );
  assert.strictEqual(
    isValidEmail("user.name+tag@domain.co.uk"),
    true,
    "Deveria aceitar email com caracteres especiais válidos",
  );
  assert.strictEqual(
    isValidEmail("invalid-email"),
    false,
    "Deveria rejeitar email sem @",
  );
  assert.strictEqual(
    isValidEmail("invalid@domain"),
    false,
    "Deveria rejeitar email sem ponto no domínio",
  );
  assert.strictEqual(isValidEmail(""), false, "Deveria rejeitar string vazia");

  // Testes de validação de CPF
  console.log("- Testando isValidCpf...");
  assert.strictEqual(
    isValidCpf("12345678901"),
    true,
    "Deveria aceitar CPF válido com 11 dígitos",
  );
  assert.strictEqual(
    isValidCpf("123.456.789-01"),
    true,
    "Deveria aceitar CPF válido formatado",
  );
  assert.strictEqual(
    isValidCpf("1234567890"),
    false,
    "Deveria rejeitar CPF curto",
  );
  assert.strictEqual(
    isValidCpf("123456789012"),
    false,
    "Deveria rejeitar CPF longo",
  );
  assert.strictEqual(
    isValidCpf("123.456.789-0a"),
    false,
    "Deveria rejeitar CPF contendo letras",
  );
  assert.strictEqual(isValidCpf(""), false, "Deveria rejeitar CPF vazio");

  console.log("✅ Todos os testes passaram com sucesso!");
} catch (error) {
  console.error("❌ Um ou mais testes falharam:", error.message);
  process.exit(1);
}

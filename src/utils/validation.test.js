const assert = require('assert');
const { isValidEmail, isValidCPF } = require('./validation');

// Simple test runner
function runTests() {
    console.log('Running tests for input validation...');

    // Email Tests
    assert.strictEqual(isValidEmail('test@example.com'), true, 'Valid email should pass');
    assert.strictEqual(isValidEmail('user.name+tag+sorting@example.com'), true, 'Valid email with subaddress should pass');
    assert.strictEqual(isValidEmail('invalid-email'), false, 'Email without @ should fail');
    assert.strictEqual(isValidEmail('@example.com'), false, 'Email without username should fail');
    assert.strictEqual(isValidEmail('test@'), false, 'Email without domain should fail');
    assert.strictEqual(isValidEmail(null), false, 'Null email should fail');
    assert.strictEqual(isValidEmail(1234), false, 'Non-string email should fail');

    // CPF Tests
    assert.strictEqual(isValidCPF('12345678901'), true, 'Valid 11 digit CPF should pass');
    assert.strictEqual(isValidCPF('123.456.789-01'), true, 'Valid formatted CPF should pass');
    assert.strictEqual(isValidCPF('1234567890'), false, 'Short CPF should fail');
    assert.strictEqual(isValidCPF('123456789012'), false, 'Long CPF should fail');
    assert.strictEqual(isValidCPF('abc.def.ghi-jk'), false, 'Alpha CPF should fail');
    assert.strictEqual(isValidCPF(null), false, 'Null CPF should fail');
    assert.strictEqual(isValidCPF(12345678901), false, 'Non-string CPF should fail');

    console.log('All tests passed successfully! 🎉');
}

try {
    runTests();
} catch (error) {
    console.error('Test failed:', error.message);
    process.exit(1);
}

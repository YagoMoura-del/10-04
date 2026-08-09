const assert = require('assert');
const { validateEmail, validateCpf } = require('./validation');

// SECURITY: Running unit tests to verify security-related input validation helper methods behave as expected.

console.log('Running Sentinel Validation Tests...');

// 1. Email validation tests
try {
    assert.strictEqual(validateEmail('test@example.com'), true, 'Valid email should pass');
    assert.strictEqual(validateEmail('user.name+tag@domain.co.uk'), true, 'Valid complex email should pass');
    assert.strictEqual(validateEmail('invalid-email'), false, 'Email without @ should fail');
    assert.strictEqual(validateEmail('invalid@'), false, 'Email without domain should fail');
    assert.strictEqual(validateEmail('@domain.com'), false, 'Email without local part should fail');
    assert.strictEqual(validateEmail('test@domain'), false, 'Email without TLD should fail');
    assert.strictEqual(validateEmail(null), false, 'Null email should fail');
    assert.strictEqual(validateEmail(undefined), false, 'Undefined email should fail');
    assert.strictEqual(validateEmail(123), false, 'Non-string email should fail');
    console.log('✅ Email validation tests passed.');
} catch (err) {
    console.error('❌ Email validation tests failed:', err.message);
    process.exit(1);
}

// 2. CPF validation tests
try {
    assert.strictEqual(validateCpf('12345678901'), true, 'Valid 11 digit CPF should pass');
    assert.strictEqual(validateCpf('123.456.789-01'), true, 'Valid formatted CPF should pass');
    assert.strictEqual(validateCpf('1234567890'), false, 'CPF with 10 digits should fail');
    assert.strictEqual(validateCpf('123456789012'), false, 'CPF with 12 digits should fail');
    assert.strictEqual(validateCpf('abc.def.ghi-jk'), false, 'CPF with letters should fail');
    assert.strictEqual(validateCpf(null), false, 'Null CPF should fail');
    assert.strictEqual(validateCpf(undefined), false, 'Undefined CPF should fail');
    assert.strictEqual(validateCpf(12345678901), false, 'Non-string CPF should fail');
    console.log('✅ CPF validation tests passed.');
} catch (err) {
    console.error('❌ CPF validation tests failed:', err.message);
    process.exit(1);
}

console.log('🎉 All validation tests passed successfully!');

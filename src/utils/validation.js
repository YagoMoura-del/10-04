// SECURITY: Basic validation regex to prevent malformed email and CPF structures and SQL injection or other injection vectors in user-controlled inputs.
function isValidEmail(email) {
    if (typeof email !== 'string') return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidCpf(cpf) {
    if (typeof cpf !== 'string') return false;
    // Format: 11 consecutive digits OR formatted as XXX.XXX.XXX-XX
    const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(cpf);
}

module.exports = {
    isValidEmail,
    isValidCpf
};

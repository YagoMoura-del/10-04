// SECURITY: Input validation helper module to validate user inputs (email and CPF)
// before passing data to database operations, preventing malformed or invalid data ingestion.

const isValidEmail = (email) => {
    if (typeof email !== 'string') return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const isValidCPF = (cpf) => {
    if (typeof cpf !== 'string') return false;
    const cpfRegex = /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(cpf);
};

module.exports = {
    isValidEmail,
    isValidCPF
};

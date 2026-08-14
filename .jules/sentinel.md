# Sentinel Security Journal

## 2025-02-18 - [Lack of Input Validation on Aluno (Student) Endpoint]

**Vulnerability:** There is a lack of server-side input validation for student records, specifically email addresses and CPF identifiers, which could lead to malformed data storage, standard integrity issues, and potential downstream abuse or XSS/injection vectors depending on how this data is consumed.
**Learning:** For school management systems, data fields like CPF (Cadastro de Pessoas Físicas) and Email are crucial identify and communication vectors. Missing backend validation allows bypass of any client-side constraints.
**Prevention:** Always implement robust server-side input validation (using regex for format matching) for key data points like Email and CPF prior to any database operations.

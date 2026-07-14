## 2026-07-14 - Lack of Input Validation for Sensitive Fields
**Vulnerability:** The application was accepting 'email' and 'cpf' fields without any format validation, allowing malformed or potentially malicious data to be stored in the database.
**Learning:** Even with parameterized queries preventing SQL injection, lack of semantic validation can lead to data corruption, business logic bypasses, and downstream security issues (e.g., if emails are used for notifications or CPFs for identity verification).
**Prevention:** Implement centralized validation utilities and apply them in controllers for all user-provided data before processing or storing it.

# Sentinel Security Journal

This journal records critical security learnings and vulnerability patterns specific to the repository architecture.

## 2025-01-20 - Input Validation of Email and CPF
**Vulnerability:** Lack of validation on crucial fields (email and CPF) when creating or updating an Aluno, allowing malformed data or potentially malicious payloads into the database.
**Learning:** Adding robust regex-based input validation at the application controller level ensures only properly formatted data is persisted, reducing risk of database corruption and downstream application errors.
**Prevention:** Always implement centralized input validation patterns for sensitive and standardized fields like Email and CPF using dedicated validation helper functions.

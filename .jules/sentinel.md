# Sentinel Security Journal

## 2025-05-22 - Incorrect Module Path in Entry Point
**Vulnerability:** Application fails to start due to `MODULE_NOT_FOUND`.
**Learning:** The `app.js` entry point was attempting to require routes from `./routes/index`, but the project structure has them under `./src/routes/index`. This prevents any security middleware or routes from being loaded.
**Prevention:** Always verify that the entry point correctly resolves all its dependencies, especially when the project follows a nested structure like `src/`.

## 2025-05-22 - Missing Input Validation for PII
**Vulnerability:** Lack of validation for `email` and `cpf` fields in the `alunos` endpoints.
**Learning:** User-provided data was being sent directly to the database without format verification, which can lead to data integrity issues or potentially be used as a vector for other attacks if the data is reflected elsewhere.
**Prevention:** Implement strict regex-based validation for all PII (Personally Identifiable Information) and other structured data fields at the controller level.

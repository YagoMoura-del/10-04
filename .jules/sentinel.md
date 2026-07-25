# Sentinel Security Journal

## 2025-07-25 - Input Validation and Entry Point Failures
**Vulnerability:** Missing input validation on email and CPF payloads allows malformed data injection. Furthermore, the application had a broken entry point loading error due to a wrong relative import of routes in `app.js`.
**Learning:** Checking node-postgres model responses in Express controllers can be error-prone; node-postgres returns empty arrays on no matches, so `if (!result)` evaluates to `false` and doesn't handle the "Not found" case correctly. Proper check should be `if (!result || result.length === 0)`.
**Prevention:** Always implement modular regex-based validation helpers (like `isValidEmail` and `isValidCpf`) for user input, check for empty arrays using `.length === 0`, and verify application loading during build/CI pipeline.

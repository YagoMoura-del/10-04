## 2025-05-22 - Improved Input Validation and DoS Protection
**Vulnerability:** Remotely triggerable DoS in 'qs' package and lack of payload size limits in Express. Missing input validation for sensitive student data (Email, CPF).
**Learning:** Even small Express applications are vulnerable to DoS if they don't limit payload sizes and use vulnerable dependencies like older versions of 'qs'.
**Prevention:** Always set payload limits in body-parser/express.json, keep dependencies updated, and implement strict input validation for all user-provided data.

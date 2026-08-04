# Sentinel Security Journal

## 2023-11-20 - Array Truthiness and Input Validation in Express Controllers
**Vulnerability:** Weak or absent input validation on user-controlled fields like email and CPF, as well as handling database empty array responses incorrectly when determining if an entity was updated or deleted.
**Learning:** In node-postgres, database responses are returned as array-like structures (or objects containing `rows` as an array). In JavaScript, empty arrays `[]` are truthy, meaning checks like `if (!updated)` will evaluate to false even if no database row was matched. Also, validating input patterns like CPF and email prevent bad data formatting and security issues.
**Prevention:** Implement modular regex validation helper functions for critical fields like CPF and email. Always verify query result existence using exact array/result length checks (e.g., `!result || result.length === 0`) rather than simple truthiness checks.

# Sentinel Security Journal

Journal entries for critical learnings in this repository.

## 2025-02-17 - Input Validation and Database Response Checking
**Vulnerability:** Lack of structured input validation on fields like email and CPF (allowing malformed or potentially malicious input) and incorrect "Not found" checks for empty array responses in the PostgreSQL client (node-postgres returns empty arrays on no matches, which evaluates to truthy).
**Learning:** Checking return values of node-postgres queries using `if (!updated)` fails when `updated` is an empty array `[]` (since `[]` is truthy in JavaScript). This results in returning `200 OK` or `500` instead of `404 Not Found`. Additionally, application-level input validation using regex patterns (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/` and `/^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/`) is critical to prevent malformed records in the database.
**Prevention:** Always check empty results in node-postgres by using `if (!result || result.length === 0)`. Standardize format validation for all incoming request payloads utilizing a robust validation module.

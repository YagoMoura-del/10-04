# Sentinel Security Journal

## 2025-02-15 - Input Validation and Truthy Array Response Handling
**Vulnerability:** Untrusted inputs (such as email and CPF) were stored in the database without format verification. Additionally, the controllers evaluated database model results directly using JavaScript's truthy operators (e.g., `!updated`), which resulted in improper response handling because `node-postgres` returns an empty array `[]` when no rows are updated/found—which is a truthy value in JavaScript.
**Learning:** Standard null checks (like `if (!updated)`) fail to correctly identify "Not Found" conditions when querying database tables with libraries like node-postgres because arrays are always truthy.
**Prevention:** Implement strict regex validation for formatted fields (e.g., email and CPF format check) at the controller level before database invocation, and defensively verify query results using `if (!result || result.length === 0)`.

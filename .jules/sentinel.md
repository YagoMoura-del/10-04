# Sentinel Security Journal

This journal records critical security learnings specific to the repository architecture of this school management API.

## 2025-03-01 - Input Validation for Student Data and Empty DB Check
**Vulnerability:** Lack of robust input validation (specifically email and CPF format check) allows malformed data and potential SQL injection attempts. Furthermore, checking if a user exists via truthy/falsy check (`if (!result)`) on node-postgres database arrays can lead to false positives (since empty arrays `[]` are truthy in JavaScript).
**Learning:** For postgres database operations, when querying records or updating/deleting them, the database response returns an array. JavaScript treats empty arrays as truthy, meaning checking `if (!result)` fails to identify a "Not found" case.
**Prevention:** Always perform validation check utilizing centralized/shared regex helpers before persisting/modifying data. When checking results of update/delete operations, explicitly check if the returned array is empty: `if (!result || result.length === 0)`.

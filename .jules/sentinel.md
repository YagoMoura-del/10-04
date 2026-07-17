# Sentinel Security Journal

## 2025-02-17 - Truthy Empty Array Responses in node-postgres
**Vulnerability:** When the application executed `UPDATE` or `DELETE` SQL queries against non-existent records, the handlers returned success status codes instead of `404 Not Found`.
**Learning:** The `pg` library returns an empty array `[]` for queries that match zero rows. Since empty arrays are truthy in JavaScript, simple falsy checks like `if (!result)` evaluate to `false` (indicating a match was found), allowing silent execution failures to bypass 'Not Found' error handling.
**Prevention:** Always check both the existence and the length of database response arrays (`if (!result || result.length === 0)`) when evaluating if an update, select, or delete query matched any rows.

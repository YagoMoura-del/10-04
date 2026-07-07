## 2026-07-07 - Node-Postgres Empty Result Handling
**Vulnerability:** Incorrect 'Not Found' handling when updating or deleting records.
**Learning:** Node-postgres returns an empty array `[]` for queries that don't match any rows (e.g., `UPDATE ... WHERE id = 999 RETURNING *`). In JavaScript, `[]` is truthy, so a simple `if (!result)` check fails to identify that no record was found.
**Prevention:** Always check both for existence and length of the result array: `if (!result || result.length === 0)`.

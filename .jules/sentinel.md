## 2025-05-14 - Database result validation pattern
**Vulnerability:** Functional regression in "not found" checks for database operations.
**Learning:** The application uses the `pg` library, where `pool.query()` returns an object with a `rows` property. When a query (like UPDATE or DELETE with RETURNING) matches no rows, `rows` is an empty array `[]`. In JavaScript, an empty array is truthy, so existing checks like `if (!updated)` were failing to detect when a resource was not found.
**Prevention:** Always check both for the existence of the result and that its length is greater than zero when expecting at least one row: `if (!result || result.length === 0)`.

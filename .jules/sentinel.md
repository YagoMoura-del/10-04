# Sentinel's Journal: Critical Security Learnings

## 2025-02-15 - PostgreSQL Logical "Not Found" Check Bypass
**Vulnerability:** Logical error bypass on resource updates and deletions where the application returned 200 OK/success instead of 404 Not Found, exposing incorrect resource modification states.
**Learning:** In JavaScript, empty arrays `[]` are truthy. Since the `pg` driver (node-postgres) returns `result.rows` as an empty array when no rows match the query (such as updating or deleting a non-existent ID), simple logical falsiness checks like `if (!result)` fail to detect a "Not Found" scenario.
**Prevention:** Always verify query results from node-postgres operations by checking both nullish/falsy status and result length, e.g., using `if (!result || result.length === 0)`.

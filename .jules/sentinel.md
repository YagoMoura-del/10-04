# Sentinel Security Journal

## 2025-08-08 - Empty PostgreSQL Response Arrays in Node-Postgres
**Vulnerability:** Not Found checks like `if (!updated)` failed to detect empty results on update/delete operations, returning a success status even when no rows were affected.
**Learning:** Node-postgres query results return empty arrays `[]` when no rows are modified or found. In JavaScript, an empty array `[]` is truthy, so `if (!updated)` checks always pass as if a record was updated.
**Prevention:** Always verify both existence and length of response arrays (e.g., `if (!updated || updated.length === 0)`) when checking for query successes in Express controllers using pg.

## 2025-08-08 - Incorrect Entry Point Import Path for Express Router
**Vulnerability:** Application failed to start due to a path resolution error in app.js.
**Learning:** The entry point app.js in the root directory was using an incorrect require path (`./routes/index`) instead of `./src/routes/index`, causing ESM/CommonJS boot failures.
**Prevention:** Always verify entry point imports correctly resolve from the root directory when nested source structures like `src/` are used.

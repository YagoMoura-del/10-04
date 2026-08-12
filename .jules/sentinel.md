# Sentinel Security Journal

## 2024-10-24 - [Postgres Array Checks for Non-Existent Records]
**Vulnerability:** A logic flaw where "Not found" checks on database query results fail because `node-postgres` returns an empty array `[]` when no rows are found. Since an empty array is truthy in JavaScript, checking `if (!result)` evaluates to false, causing non-existent records to bypass error-handling pathways.
**Learning:** Checking for model result presence using `if (!result)` in a Node.js Express application with `pg` is unsafe because `result` (i.e. `result.rows`) is always a list.
**Prevention:** Always check if the returned query array is empty or falsy: `if (!result || result.length === 0)`.

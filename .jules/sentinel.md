## 2025-08-05 - Incorrect Database Response Validation and Routing Configuration

**Vulnerability:** Improper validation of query results from pg Pool leads to logical bypass where requests for non-existent resource IDs return 200 OK with empty payloads instead of 404 Not Found.
**Learning:** In node-postgres, the returned rows are structured as an array. Empty arrays `[]` are truthy in JavaScript, which meant checking `if (!result)` would bypass the check for non-existent items, leading to silent failures or incorrect HTTP response codes.
**Prevention:** Always validate database query results returned as arrays by checking both truthiness and length: `if (!result || result.length === 0)`. Additionally, ensure absolute or project-relative import paths (e.g., `./src/routes/index` instead of `./routes/index`) are used to prevent module resolution failures.

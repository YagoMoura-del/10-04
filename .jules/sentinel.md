# Sentinel's Security Journal

## 2025-02-14 - Incorrect Validation of Empty Database Results in Express Controllers
**Vulnerability:** Weak error handling and incorrect status response on missing records due to truthy evaluation of empty arrays returned by node-postgres.
**Learning:** In the controllers (`alunoController.js`, etc.), checks like `if (!updated)` or `if (!deleted)` were used to detect missing records. However, `node-postgres` returns `[]` (an empty array) when no matching rows are found, which is truthy in JavaScript. This caused the application to mistakenly return a success status (e.g. `200 OK` or `201 Created`) with an empty payload instead of `404 Not Found`, violating secure error handling design.
**Prevention:** Always check both array existence and length, such as `if (!result || result.length === 0)`, when validating database operations before responding to the client.

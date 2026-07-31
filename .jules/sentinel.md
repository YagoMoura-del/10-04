## 2025-07-31 - Falsy Truthiness in Node-Postgres Return Checks

**Vulnerability:** Database model responses for update/delete queries return arrays (e.g., `result.rows` from `RETURNING *`). The controllers originally checked for "Not Found" using simple negation like `if (!updated)`, which bypassed the check because empty arrays (`[]`) are truthy in JavaScript, returning 200 Success for non-existent records.
**Learning:** Checking the existence of records returned by Postgres queries must check array length (`!result || result.length === 0`) rather than simple boolean coercion.
**Prevention:** Always use length-based or robust empty checks when expecting database arrays.

## 2025-07-31 - Broken Application Boot with Incorrect Routes Require Path

**Vulnerability:** The root entry point `app.js` attempted to require routes via `./routes/index`, whereas the project routes are located under `./src/routes/index`. This caused a complete startup crash (`MODULE_NOT_FOUND`) on launch.
**Learning:** Verify that any top-level files (such as `app.js`) use correct absolute or relative subfolder references (e.g., `./src/...`) since the codebase keeps MVC files inside the `src/` directory.
**Prevention:** Always test application boot using non-blocking require statements (e.g. `node -e "require('./app.js')"`).

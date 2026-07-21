# Sentinel Security Journal

## 2025-02-18 - Incorrect "Not Found" Array Evaluator Checks
**Vulnerability:** Controller update and delete endpoints returning HTTP 200 OK with empty arrays instead of returning HTTP 404 Not Found when a non-existent ID was supplied.
**Learning:** Node-postgres queries return an empty array `[]` when no rows are found or modified, which is a truthy value in JavaScript. Standard falsy checks like `if (!result)` fail to detect "Not Found" states.
**Prevention:** Always verify node-postgres results by checking both existence and length of arrays, such as `if (!result || result.length === 0)`, to properly trigger 404 responses.

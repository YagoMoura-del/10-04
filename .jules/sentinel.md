## 2025-05-14 - Incorrect database result handling in controllers
**Vulnerability:** Logical error in update/delete operations where empty results (empty arrays) from the database were treated as success because the check `if (!result)` evaluates to false for `[]`.
**Learning:** The `pg` library returns an array of rows. An empty result set is an empty array, which is truthy in JavaScript. This led to the application returning success codes even when no records were found or modified.
**Prevention:** Always check the length of the result array (e.g., `if (!result || result.length === 0)`) when expecting at least one record to be returned from a database operation.

## 2025-05-14 - Express Application Hardening
**Vulnerability:** Potential for technology fingerprinting via 'X-Powered-By' header and large-payload Denial of Service (DoS) due to missing JSON body limits.
**Learning:** Default Express configurations can leak information about the stack and are vulnerable to resource exhaustion from oversized payloads.
**Prevention:** Explicitly disable the 'X-Powered-By' header and enforce strict payload limits on body parsers (e.g., `express.json({ limit: '10kb' })`).

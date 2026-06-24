## 2025-05-14 - Truthy Empty Arrays in Database Checks
**Vulnerability:** API endpoints (update/delete) returning 200 OK or 201 Created with incorrect data when a record was not found or modified.
**Learning:** In JavaScript, an empty array `[]` returned by the `pg` library is truthy. Checking `if (!result)` fails to catch empty result sets.
**Prevention:** Always use `result.length === 0` to check for empty database result sets when using the `pg` library or similar query builders.

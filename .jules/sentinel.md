## 2026-07-10 - [Bug] Improper Database Response Handling
**Vulnerability:** API returning 200 OK with empty content instead of 404 Not Found when a resource is not found.
**Learning:** Node-postgres (pg) returns an empty array for queries that match no rows, which is truthy in JavaScript, causing "Not found" checks like 'if (!result)' to fail.
**Prevention:** Always verify the length of the result array using 'if (!result || result.length === 0)' when expecting a record from the database.

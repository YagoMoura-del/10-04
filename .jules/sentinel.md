# Sentinel Security Journal

## 2025-08-10 - Checking node-postgres Empty Result Sets Properly
**Vulnerability:** Under update and delete actions, missing check for empty array output from `pg` (`result.rows`) caused the controllers to assume record updates or deletions succeeded and returned `200 OK` or truthy response even when no records were affected.
**Learning:** `node-postgres` returns an empty array `[]` when no rows are updated, deleted, or matched. An empty array `[]` evaluates to truthy in JavaScript, meaning typical checks like `if (!updated)` will bypass the "Not found" check, leading to logical errors and false-positive operation reports.
**Prevention:** Ensure checks on query results of UPDATE and DELETE actions verify length using `if (!result || result.length === 0)` to guarantee safe and accurate validation.

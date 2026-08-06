# Sentinel Security Journal - Critical Learnings

## 2026-04-10 - Truthy Database Response Array Logic Bypass

**Vulnerability:** Empty database query result arrays evaluated as truthy, leading to a bypass of "Not Found" resource checks.

**Learning:** `node-postgres` returns an empty array `[]` when no rows are found/affected during database operations (such as updates or deletes). In JavaScript, arrays (even empty ones) are truthy objects, so `!updated` evaluates to `false`. This logic error prevented the application from returning correct 404 responses for missing/non-existent resources.

**Prevention:** Always check `!result || result.length === 0` to robustly handle empty database responses in Express controllers.

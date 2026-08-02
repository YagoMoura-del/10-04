# Sentinel's Security Journal

## 2025-02-02 - PostgreSQL Model Response Validation

**Vulnerability:** Under MVC architectures using `node-postgres`, checking query success via simple truthy/falsy check on the returned result (such as `if (!updated)`) fails because the database driver returns an empty array `[]` when no rows are modified or found. This empty array is a truthy value in JavaScript, meaning "not found" flows are bypassed, potentially exposing incorrect application states or allowing unauthorized state assumptions.
**Learning:** `node-postgres` query return structures (e.g. `result.rows`) are arrays. Simple non-null checks on arrays do not correctly identify whether rows were returned or matched.
**Prevention:** Always check database model results using explicit length validation: `if (!result || result.length === 0)` to correctly handle "not found" situations.

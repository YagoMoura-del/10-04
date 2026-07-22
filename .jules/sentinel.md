# Sentinel Security Journal

## 2025-02-14 - Node-Postgres Empty Array Falsy Check Bypass
**Vulnerability:** Falsy checks on model updates and deletes (`if (!result)`) fail to detect when zero records were modified, as node-postgres returns an empty array `[]` for queries with no matches, which is truthy in JavaScript. This can lead to false successful API responses and logic bypasses.
**Learning:** In JavaScript, an empty array is a truthy value. Therefore, standard falsy checks fail to correctly identify non-existent database resources.
**Prevention:** Ensure all controllers validate database return arrays by using `if (!result || result.length === 0)` instead of `if (!result)`.

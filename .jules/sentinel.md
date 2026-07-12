# Sentinel Security Journal

This journal records critical security learnings and vulnerability patterns discovered in this codebase.

## 2025-05-14 - Incorrect Result Validation in Controllers
**Vulnerability:** The application incorrectly handled "Not found" cases by checking only the truthiness of the database result (`if (!updated)`).
**Learning:** In this project, `node-postgres` (pg) returns an empty array `[]` for queries that match no rows (like UPDATE or DELETE with a non-existent ID). In JavaScript, an empty array is truthy, so the "Not found" check would never trigger, potentially leading to misleading success responses (200 OK) for failed operations.
**Prevention:** Always check both for the existence of the result and its length: `if (!result || result.length === 0)`.

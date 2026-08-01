# Sentinel Security Journal

## 2025-08-01 - Incorrect Not-Found Database Validation Check
**Vulnerability:** Under certain database conditions, updating or deleting records that do not exist succeeded silently or leaked invalid success messages because the application checked for `if (!result)` instead of checking for empty arrays.
**Learning:** The PostgreSQL pool query responses from model instances return array structures, which are truthy in JavaScript even if empty. This causes standard checking (`if (!result)`) to fail to detect a missing record.
**Prevention:** Always check database results using `if (!result || result.length === 0)` when expecting a populated array of affected rows from node-postgres or pg pool operations.

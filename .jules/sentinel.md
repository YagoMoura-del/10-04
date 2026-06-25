## 2025-06-25 - Incorrect Handling of Empty Database Results
**Vulnerability:** Use of truthiness checks (e.g., `if (!result)`) on database results that return arrays from the `pg` library.
**Learning:** In JavaScript, an empty array `[]` is truthy. The controllers were failing to return 404 when no record was found or updated because `![]` is `false`.
**Prevention:** Always check `result.length === 0` when expecting a result from a model that returns `rows` from a `pg` query.

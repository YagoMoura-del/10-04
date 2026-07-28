## 2025-01-20 - [Input Validation and DB Handling Integration]
**Vulnerability:** Lack of server-side validation on email and CPF formats for students (aluno), opening up potential for invalid/unsafe payloads or malformed data in the database.
**Learning:** In node-postgres, a successful query returns an empty array when there are no matches, which evaluates to truthy in JavaScript. Thus, any simplistic checking of DB responses (e.g., `if (!result)`) fails to correctly identify missing records. Checking for `if (!result || result.length === 0)` prevents this logical bypass.
**Prevention:** Always implement strict, centralized input validation with safe regular expressions, and correctly perform non-empty array checks on return values of database queries.

## 2025-05-10 - Input Validation and Module Resolution
**Vulnerability:** Lack of input validation on `aluno` creation/update (email/CPF) and application entry point bug.
**Learning:** The application's entry point `app.js` was referencing `./routes/index` which did not exist at that location (it's in `./src/routes/index`), causing a startup failure that was discovered during security enhancement implementation. Also, database model responses are arrays, so "not found" checks must check for `length === 0`.
**Prevention:** Always verify application startup after changes. Centralize validation logic in a utility file. Ensure "not found" checks correctly handle truthy empty arrays from the database driver.

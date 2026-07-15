# Sentinel Security Journal

## 2025-05-15 - Inaccurate Resource Existence Checks
**Vulnerability:** API endpoints could return `200 OK` or `201 Created` even when no records were found or modified in the database.
**Learning:** In `node-postgres`, an empty result set is returned as an empty array `[]`, which is truthy in JavaScript. The existing checks `if (!result)` were insufficient.
**Prevention:** Always check both the existence of the result and its length when interacting with the database: `if (!result || result.length === 0)`.

## 2025-05-15 - Broken Application Entry Point
**Vulnerability:** The application failed to start due to an incorrect path for requiring routes in `app.js`.
**Learning:** Relative paths in `require()` must be accurate relative to the file's location. The path `./routes/index` was incorrect because the `routes` directory is inside `src`.
**Prevention:** Use the correct directory structure for all internal module requirements (e.g., `./src/routes/index`).

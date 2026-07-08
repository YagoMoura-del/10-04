## 2025-05-15 - [qs vulnerability fix]
**Vulnerability:** Moderate severity DoS vulnerability in 'qs' package (sub-dependency of express).
**Learning:** Dependency vulnerabilities can exist in deep sub-dependencies and are best fixed using 'npm audit fix' which safely updates the lockfile.
**Prevention:** Regularly run 'npm audit' to identify and resolve transitive dependency vulnerabilities.

## 2025-05-15 - [Incorrect application entry point configuration]
**Vulnerability:** The application was failing to boot due to an incorrect path to the routes directory in 'app.js'.
**Learning:** Broken entry points prevent automated security scanning and verification of the running application.
**Prevention:** Ensure that all 'require' paths are relative to the file they are called from and point to the correct directory structure (e.g., 'src/routes' instead of './routes' if the file is in the root).

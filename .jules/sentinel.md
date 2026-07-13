## 2025-05-14 - Security Hardening and Path Resolution
**Vulnerability:** Moderate severity DoS in `qs` package, potential DoS via large JSON payloads, and lack of security headers.
**Learning:** The application lacked basic defense-in-depth measures and had a path resolution issue in the main entry point that prevented it from starting correctly in certain environments.
**Prevention:** Regularly run `npm audit`, implement payload size limits, set security headers, and ensure all internal path references are correct and consistent with the project structure.

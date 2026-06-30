## 2025-05-14 - [Security Hardening and Entry Point Fix]
**Vulnerability:** Missing JSON payload limits (DoS risk) and enabled X-Powered-By header (Information Disclosure). Also, a broken route import in `app.js` prevented the application from starting.
**Learning:** Baseline security hardening (payload limits, disabling technology fingerprinting) should be part of the initial application setup. Furthermore, verifying that the application entry point is functional after changes is crucial, especially when the project structure might be ambiguous.
**Prevention:** Always include `app.disable('x-powered-by')` and `express.json({ limit: '...' })` in Express apps. Use automated smoke tests (like `node -e "require('./app.js') ..."`) to verify bootability.

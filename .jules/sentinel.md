## 2025-05-14 - Application Hardening and DoS Prevention
**Vulnerability:** The application was vulnerable to Denial of Service (DoS) attacks via large JSON payloads (no limit set) and a moderate vulnerability in the `qs` dependency. It also leaked technology stack information via the `X-Powered-By` header.
**Learning:** Initial boilerplate Express setups often omit critical security hardening middleware and payload limits, leaving the app exposed to resource exhaustion.
**Prevention:** Always enforce strict `express.json()` limits (e.g., 10kb) and disable information disclosure headers in the entry point. Regularly run `npm audit` to catch remotely triggerable DoS vulnerabilities in dependencies.

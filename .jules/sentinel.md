## 2025-05-15 - [Security Hardening & Refactoring]
**Vulnerability:** Missing security headers, server fingerprinting via `X-Powered-By`, and potential DoS via large JSON payloads.
**Learning:** Default Express configurations lack several defensive layers. The entry point was also hard to verify programmatically as it started the server immediately.
**Prevention:** Always use `helmet`, disable `x-powered-by`, and set body-parser limits. Export the app instance using `require.main === module` for easier verification and testing.

## 2025-05-15 - [Security Hardening with Helmet and Payload Limits]
**Vulnerability:** Missing security headers and lack of payload size limits.
**Learning:** Standard Express setups often miss essential security headers (like HSTS, CSP, etc.) and are vulnerable to body-parser-based DoS attacks if payload sizes are not restricted.
**Prevention:** Always use `helmet` middleware for secure defaults and set `limit` on body-parsing middleware to prevent resource exhaustion.

# Sentinel's Journal - Critical Learnings Only

## 2025-05-15 - [Initial Security Hardening]
**Vulnerability:** Information leakage through `X-Powered-By` header and potential DoS via large JSON payloads.
**Learning:** Default Express configurations are often insecure and expose server details or leave the application vulnerable to basic DoS attacks.
**Prevention:** Always disable `X-Powered-By`, set security headers like `X-Content-Type-Options` and `X-Frame-Options`, and limit payload sizes in middleware.

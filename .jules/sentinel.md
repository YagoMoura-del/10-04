## 2025-05-23 - Application Hardening
**Vulnerability:** The application had several security gaps: it leaked the `X-Powered-By` header, had no limit on JSON payload size (DoS risk), lacked basic security headers (`X-Content-Type-Options`, `X-Frame-Options`), and had a broken route import that prevented it from starting.
**Learning:** Initializing a project with basic Express defaults leaves it vulnerable to simple information gathering and DoS attacks. Basic hardening should be part of the initial setup.
**Prevention:** Always use `app.disable('x-powered-by')`, set reasonable body limits, and use security headers (or a library like `helmet`).

## 2025-05-15 - Hardening app.js and Path Fix
**Vulnerability:** Missing security headers, exposed X-Powered-By header, and no payload size limit (DoS risk). Also, a broken routes path prevented the app from starting.
**Learning:** The application was missing basic security posture and had a critical bug in the entry point file. Programmatic verification was difficult because the app instance wasn't exported and the server started immediately.
**Prevention:** Use 'helmet' for secure headers, disable 'X-Powered-By', and set payload limits. Always export the Express app instance and use 'require.main === module' to wrap the server listen call for better testability and verification.

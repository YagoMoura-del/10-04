# Sentinel Security Journal

## 2025-05-15 - Incorrect Route Path and Missing Security Headers
**Vulnerability:** The application was unable to start due to an incorrect route path (`./routes/index` instead of `./src/routes/index`). Additionally, it was missing critical security headers and body size limits, leaving it vulnerable to common web attacks and DoS.
**Learning:** Even small routing errors can prevent security middleware from being effective if the app doesn't start. Standard Express setups often overlook default security headers and payload limits.
**Prevention:** Always verify the application starts correctly after changes using `node -e "require('./app.js')"`. Implement `helmet` and body limits as a standard baseline for all Express applications.

## 2025-05-15 - Implement JSON Payload Limits and Route Fix
**Vulnerability:** Denial of Service (DoS) through large JSON payloads and potential Information Disclosure.
**Learning:** Default Express configuration lacks payload size limits and includes the `X-Powered-By` header, which can be used for fingerprinting. Also discovered a broken route import that prevented the app from starting.
**Prevention:** Always enforce payload limits in `express.json()`, disable `X-Powered-By`, and verify route paths after directory restructuring.

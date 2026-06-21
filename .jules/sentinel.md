## 2025-05-14 - Information Disclosure and DoS Hardening in Express

**Vulnerability:** Technology fingerprinting via `X-Powered-By` header and potential DoS via large JSON payloads.

**Learning:** Express.js by default identifies itself in response headers and allows relatively large (100kb) JSON payloads, which can be exploited for reconnaissance and resource exhaustion.

**Prevention:** Always use `app.disable('x-powered-by')` and set strict `limit` options on body-parser middlewares like `express.json()`.

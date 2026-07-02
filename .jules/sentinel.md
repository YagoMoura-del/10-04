# Sentinel Security Journal

This journal records critical security learnings specific to this repository's architecture.

## 2025-05-14 - Application Hardening and Input Validation
**Vulnerability:** Technology fingerprinting via `X-Powered-By`, potential DoS via large JSON payloads, and lack of email validation.
**Learning:** The application was exposing its framework (Express) and was vulnerable to payload-based DoS. Additionally, student emails were not validated at the controller level.
**Prevention:** Always disable `X-Powered-By` in Express apps, enforce strict JSON payload limits (e.g., 10kb), and implement regex-based validation for critical fields like email in controllers before processing.

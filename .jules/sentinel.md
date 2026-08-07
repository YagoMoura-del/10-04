# Sentinel Security Journal

## 2024-08-07 - Incorrect Application Entry Route Resolution

**Vulnerability:** Application crashed/failed to load routing because app.js used an incorrect require path (`./routes/index` instead of `./src/routes/index`).
**Learning:** An incorrect path to the routes definition caused the application to fail to boot and start listeners correctly, leading to potential Denial of Service (DoS) during deployment.
**Prevention:** Always verify entry point route imports and test booting the application entrypoint via dynamic node require assertions before releasing/pushing code.

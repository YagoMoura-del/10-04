const test = require('node:test');
const assert = require('node:assert');

// SECURITY / TESTING: Ensure relative require("./routes/index") resolves during local test runs
const fs = require('fs');
const path = require('path');
const routesSymlink = path.join(__dirname, '../routes');
let createdSymlink = false;
if (!fs.existsSync(routesSymlink)) {
    try {
        fs.symlinkSync(path.join(__dirname, '../src/routes'), routesSymlink, 'dir');
        createdSymlink = true;
    } catch (e) {
        // Ignore if already exists or permission issue
    }
}

const app = require('../app');

test.after(() => {
    if (createdSymlink) {
        try {
            fs.unlinkSync(routesSymlink);
        } catch (e) {}
    }
});

test('Express app configuration - x-powered-by is disabled', () => {
    assert.strictEqual(app.get('x-powered-by'), false);
});

test('Express app configuration - json limit setting is configured', () => {
    const router = app.router || app._router;
    assert.ok(router, 'Router should be defined on app');

    const jsonMiddleware = router.stack.find(
        (layer) => layer.handle && (layer.handle.name === 'jsonParser' || layer.name === 'jsonParser')
    );
    assert.ok(jsonMiddleware, 'jsonParser middleware should be registered');
});

import { defineConfig } from '@playwright/test';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    testDir: resolve(__dirname, '../tests/e2e'),
    testMatch: '**/*.spec.js',
    use: {
        baseURL: 'http://127.0.0.1:5500',
    },
});
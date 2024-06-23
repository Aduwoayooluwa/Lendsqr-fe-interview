import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest';

if (!globalThis.fetch) {
    globalThis.fetch = vi.fn();
    vi.mock('node-fetch', () => ({
        default: globalThis.fetch
    }));
}


afterEach(() => {
    cleanup();
})
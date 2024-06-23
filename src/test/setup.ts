import { afterEach, beforeAll } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest';

if (!globalThis.fetch) {
    globalThis.fetch = vi.fn();
    vi.mock('node-fetch', () => ({
        default: globalThis.fetch
    }));
}

beforeAll(() => {

    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: vi.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: vi.fn(),
            removeListener: vi.fn(),
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            dispatchEvent: vi.fn(),
        })),
    });
    vi.resetModules();
});

afterEach(() => {
    cleanup();
})
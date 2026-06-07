// Tests unitarios de validateEmail

import { describe, it, expect } from 'vitest';
import { validateEmail } from '../../src/scripts/auth.js';

describe('validateEmail', () => {
    it('deberia devolver true si el email es valido', () => {
        expect(validateEmail('admin@crewly.com')).toBe(true);
    });

    it('deberia devolver false si el email no tiene arroba', () => {
        expect(validateEmail('admincrewly.com')).toBe(false);
    });

    it('deberia devolver false si el email no tiene dominio', () => {
        expect(validateEmail('admin@')).toBe(false);
    });

    it('deberia devolver false si el email esta vacio', () => {
        expect(validateEmail('')).toBe(false);
    });
});
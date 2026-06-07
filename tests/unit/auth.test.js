import { describe, it, expect } from 'vitest';
import { validateEmail, validatePassword } from '../../src/scripts/auth.js';

// Tests unitarios de validateEmail
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

// Tests unitarios de validatePassword
describe('validatePassword', () => {
    it('deberia devolver true si la contrasena es valida', () => {
        expect(validatePassword('Password1')).toBe(true);
    });

    it('deberia devolver false si tiene menos de 8 caracteres', () => {
        expect(validatePassword('Pass1')).toBe(false);
    });

    it('deberia devolver false si no tiene ningun digito', () => {
        expect(validatePassword('Password')).toBe(false);
    });
});
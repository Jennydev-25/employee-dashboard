import { describe, it, expect } from 'vitest';
import { filterByLetter } from '../../src/scripts/filter.js';

// filterByLetter
describe('filterByLetter', () => {
    it('deberia devolver todos los empleados si la letra es Todos', () => {
        const employees = [{ name: 'Ana' }, { name: 'Bruno' }];
        expect(filterByLetter(employees, 'Todos')).toEqual(employees);
    });

    it('deberia filtrar correctamente por letra', () => {
        const employees = [{ name: 'Ana' }, { name: 'Bruno' }];
        expect(filterByLetter(employees, 'A')).toEqual([{ name: 'Ana' }]);
    });

    it('deberia ser insensible a mayusculas', () => {
        const employees = [{ name: 'ana' }, { name: 'Bruno' }];
        expect(filterByLetter(employees, 'A')).toEqual([{ name: 'ana' }]);
    });
});
// Logica de filtrado de empleados

// Filtra empleados por la primera letra del nombre
export function filterByLetter(employees, letter) {
    if (!letter || letter === 'Todos') return employees;
    return employees.filter(employee =>
        employee.name.charAt(0).toUpperCase() === letter.toUpperCase()
    );
}
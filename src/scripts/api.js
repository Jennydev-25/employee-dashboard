// Consumo de la API REST externa

const AVATAR_BASE_URL = 'https://randomuser.me/api/portraits';
const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Obtiene la lista de empleados desde la API
export async function getEmployees() {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Error al obtener los empleados');
    return response.json();
}
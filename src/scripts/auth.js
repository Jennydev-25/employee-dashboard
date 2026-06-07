// Modulo de autenticacion y gestion de sesion

// Valida el formato del email
export function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Valida la contrasena: minimo 8 caracteres y al menos 1 digito
export function validatePassword(password) {
    return password.length >= 8 && /\d/.test(password);
}

// Carga las credenciales del admin desde .env/admin.json
export async function loadCredentials() {
    const response = await fetch('.env/admin.json');
    if (!response.ok) throw new Error('No se pudieron cargar las credenciales');
    return response.json();
}

// Guarda la sesion en localStorage
export function saveSession(user) {
    localStorage.setItem('crewly_session', JSON.stringify(user));
}

// Recupera la sesion guardada
export function getSession() {
    const session = localStorage.getItem('crewly_session');
    return session ? JSON.parse(session) : null;
}

// Elimina la sesion de localStorage
export function clearSession() {
    localStorage.removeItem('crewly_session');
}
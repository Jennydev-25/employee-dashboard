// Modulo de autenticacion y gestion de sesion

// Valida el formato del email
export function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
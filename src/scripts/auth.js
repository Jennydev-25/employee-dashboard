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

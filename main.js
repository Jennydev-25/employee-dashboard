// Logica principal de la aplicacion

import { validateEmail, validatePassword, loadCredentials, saveSession, getSession } from './src/scripts/auth.js';

// Detectar pagina activa
const loginForm = document.getElementById('login-form');
const employeesContainer = document.getElementById('employees-container');

if (loginForm) {
    initLogin();
} else if (employeesContainer) {
    initDashboard();
}

// Login
function initLogin() {
    if (getSession()) {
        window.location.replace('./src/pages/dashboard.html');
        return;
    }

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    emailInput.addEventListener('input', () => clearFieldError(emailInput, 'email-error'));
    passwordInput.addEventListener('input', () => clearFieldError(passwordInput, 'password-error'));

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        let isValid = true;

        if (!email) {
            showFieldError(emailInput, 'email-error', 'El correo es obligatorio');
            isValid = false;
        } else if (!validateEmail(email)) {
            showFieldError(emailInput, 'email-error', 'Introduce un email válido');
            isValid = false;
        }

        if (!password) {
            showFieldError(passwordInput, 'password-error', 'La contraseña es obligatoria');
            isValid = false;
        } else if (!validatePassword(password)) {
            const msg = password.length < 8
                ? 'Mínimo 8 caracteres'
                : 'Debe contener al menos un número';
            showFieldError(passwordInput, 'password-error', msg);
            isValid = false;
        }

        if (!isValid) return;

        try {
            const credentials = await loadCredentials();
            if (email === credentials.email && password === credentials.password) {
                saveSession({ email });
                window.location.replace('./src/pages/dashboard.html');
            } else {
                showFieldError(emailInput, 'email-error', 'Credenciales incorrectas');
            }
        } catch {
            showFieldError(emailInput, 'email-error', 'Error al verificar credenciales');
        }
    });
}

// Helpers
function showFieldError(input, errorId, message) {
    const errorEl = document.getElementById(errorId);
    input.classList.add('form__input--error');
    errorEl.textContent = message;
}

function clearFieldError(input, errorId) {
    const errorEl = document.getElementById(errorId);
    input.classList.remove('form__input--error');
    errorEl.textContent = '';
}
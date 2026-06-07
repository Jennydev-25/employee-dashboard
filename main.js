// Logica principal de la aplicacion

import { validateEmail, validatePassword, loadCredentials } from './src/scripts/auth.js';

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
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
}
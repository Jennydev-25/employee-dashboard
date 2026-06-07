// Logica principal de la aplicacion

const loginForm = document.getElementById('login-form');
const employeesContainer = document.getElementById('employees-container');

if (loginForm) {
    initLogin();
} else if (employeesContainer) {
    initDashboard();
}
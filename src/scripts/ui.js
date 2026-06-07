// Renderizado y DOM

// Renderiza la lista de empleados en el contenedor
export function renderEmployees(employees, container) {
    container.innerHTML = '';

    employees.forEach(employee => {
        const gender = employee.id % 2 === 0 ? 'women' : 'men';
        const avatarUrl = `https://randomuser.me/api/portraits/${gender}/${employee.id}.jpg`;

        const card = document.createElement('article');
        card.className = 'card';
        card.dataset.id = employee.id;

        card.innerHTML = `
            <img src="${avatarUrl}"
                alt="Foto de ${employee.name}"
                class="card__avatar">
            <div class="card__info">
                <h2 class="card__name">${employee.name}</h2>
                <p class="card__email">${employee.email}</p>
            </div>
        `;

        container.appendChild(card);
    });
}

// Muestra el indicador de carga
export function showLoading(container) {
    container.innerHTML = `
        <div class="loading">
            <div class="loading__spinner"></div>
            <p class="loading__text">Cargando empleados...</p>
        </div>
    `;
}

// Oculta el indicador de carga
export function hideLoading(container) {
    const loading = container.querySelector('.loading');
    if (loading) loading.remove();
}

// Muestra un mensaje de error con boton de reintento
export function showError(container, onRetry) {
    container.innerHTML = `
        <div class="error">
            <p class="error__message">No se pudieron cargar los empleados. Inténtalo de nuevo.</p>
            <button class="btn btn--primary error__retry" id="retry-btn">Reintentar</button>
        </div>
    `;
    container.querySelector('#retry-btn').addEventListener('click', onRetry);
}


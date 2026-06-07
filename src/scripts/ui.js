// Renderizado y DOM

// Renderiza la lista de empleados en el contenedor
export function renderEmployees(employees, container) {
    container.innerHTML = '';

    employees.forEach(employee => {
        const maleIds = [2, 7, 8];
        const gender = maleIds.includes(employee.id) ? 'men' : 'women';
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

// Renderiza los botones del filtro A-Z
export function renderFilterButtons(container) {
    const letters = ['Todos', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

    container.innerHTML = '';

    letters.forEach(letter => {
        const btn = document.createElement('button');
        btn.className = 'filter__btn';
        btn.textContent = letter;
        btn.dataset.letter = letter;
        if (letter === 'Todos') btn.classList.add('filter__btn--active');
        container.appendChild(btn);
    });
}

// Muestra el detalle de un empleado
export function showDetail(employee, avatarUrl) {
    const detail = document.getElementById('employee-detail');
    const main = document.querySelector('.dashboard-main');

    document.getElementById('detail-avatar').src = avatarUrl;
    document.getElementById('detail-avatar').alt = `Foto de ${employee.name}`;
    document.getElementById('detail-id').textContent = `ID DE EMPLEADO: ${employee.id}`;
    document.getElementById('detail-name').textContent = employee.name;
    document.getElementById('detail-email').textContent = employee.email;
    document.getElementById('detail-street').textContent = employee.address.street;
    document.getElementById('detail-suite').textContent = employee.address.suite;
    document.getElementById('detail-city').textContent = `${employee.address.city}, ${employee.address.zipcode}`;
    document.getElementById('detail-phone').textContent = employee.phone;

    main.hidden = true;
    detail.hidden = false;
}

// Oculta el detalle y vuelve al listado
export function hideDetail() {
    const detail = document.getElementById('employee-detail');
    const main = document.querySelector('.dashboard-main');

    detail.hidden = true;
    main.hidden = false;
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


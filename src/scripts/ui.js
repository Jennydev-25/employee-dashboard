// Renderizado y DOM

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


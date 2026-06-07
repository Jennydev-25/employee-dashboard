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
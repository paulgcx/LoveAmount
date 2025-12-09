// Iniciar sincronización
if (document.getElementById('p-count')) {
    document.addEventListener('DOMContentLoaded', () => {
        window.LoveSync.start();
    });
}

// Manejador global para los botones (puedes dejarlo en Blade o aquí)
window.handleLoveClick = function(type, event) {
    const rect = event.target.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    window.LoveUI.createHearts(x, y);
    window.LoveUI.showBubble(type === 'paul' ? 'paul-bubble' : 'vic-bubble');

    window.LoveAPI.increment(type)
        .then(data => {
            window.LoveDOM.setCount(type === 'paul' ? 'p-count' : 'v-count', type === 'paul' ? data.p_count : data.v_count);
            window.LoveDOM.updateTotal();
        })
        .catch(() => alert('¡Algo falló!'));
};
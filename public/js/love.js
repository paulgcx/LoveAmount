async function increment(type) {
    const url = type === 'paul' ? '/increment/paul' : '/increment/vic';
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    // Efecto a animar
    const counterAnim = document.getElementById(type === 'paul' ? 'p-count' : 'v-count');
    counterAnim.classList.add('updating');

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': csrfToken,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            counterAnim.textContent = type === 'paul' ? data.p_count : data.v_count;
        } else {
            alert('¡Algo falló!');
        }
    } catch (error) {
        alert('Error de conexión');
    } finally {
        setTimeout(() => counterAnim.classList.remove('updating'), 150);
    }
}

// Función para crear corazones en la posición del clic
function createHearts(x, y) {
    const container = document.getElementById('hearts-container');
    const count = 8; // Número de corazones por clic

    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.className = 'heart';

        // Posición inicial: donde se hizo clic
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;

        // Dirección aleatoria
        const angle = Math.random() * Math.PI * 2; // 0 a 360 grados en radianes
        const distance = 80 + Math.random() * 120; // 80px a 200px
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;

        heart.style.setProperty('--tx', `${tx}px`);
        heart.style.setProperty('--ty', `${ty}px`);

        container.appendChild(heart);

        // Eliminar del DOM después de la animación
        setTimeout(() => {
            heart.remove();
        }, 1200);
    }
}

// Nueva función para manejar el clic con efecto
function incrementWithEffect(type, event) {
    // Obtener posición del clic
    const rect = event.target.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Crear corazones
    createHearts(x, y);

    // Mostrar globo de dialogo.
    if (type === 'paul') showBubble('paul-bubble');
    if (type === 'vic') showBubble('vic-bubble');

    // Ejecutar la lógica de incremento
    increment(type);
}

// Actualiza los contadores cada 3 segundos
setInterval(async () => {
    try {
        const response = await fetch('/');
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        // Actualiza solo si el valor cambió
        const newP = doc.getElementById('p-count').textContent;
        const newV = doc.getElementById('v-count').textContent;
        const currentP = document.getElementById('p-count').textContent;
        const currentV = document.getElementById('v-count').textContent;

        // Valor total
        const total = document.querySelector('.total-count');
        
        // CAMBIO EN PAUL DESDE OTRO DISPOSITIVO.
        if (newP !== currentP) {
            const pEl = document.getElementById('p-count');
            pEl.textContent = newP;
            pEl.classList.add('sync-pulse');
            setTimeout(() => pEl.classList.remove('sync-pulse'), 600);
        }

        // CAMBIO EN VIC DESDE OTRO DISPOSITIVO.
        if (newV !== currentV) {
            const vEl = document.getElementById('v-count');
            vEl.textContent = newV;
            vEl.classList.add('sync-pulse');
            setTimeout(() => vEl.classList.remove('sync-pulse'), 600);
        }

        // CAMBIO EN EL TOTAL
        if (total) {
            const p = parseInt(document.getElementById('p-count').textContent);
            const v = parseInt(document.getElementById('v-count').textContent);
            total.textContent = p + v;
        }
    } catch (e) {
        // TO DO.
    }
}, 1000);

function showBubble(bubbleId) {
    const bubble = document.getElementById(bubbleId);

    if (!bubble) return;

    bubble.classList.add('show');

    setTimeout(() => {
        bubble.classList.remove('show');
    }, 1500);
}
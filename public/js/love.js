// ----- INCREMENTAR EL CONTADOR DE AMOR -----
async function increment(type) {
    // Recoger el valor de GET.
    const url = type === 'paul' ? '/increment/paul' : '/increment/vic';
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    // Seleccionar el contador específico para cada caso -> Paul | Vic.
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

        // INCREMENTO CORRECTO.
        if (response.ok) {
            const data = await response.json();
            counterAnim.textContent = type === 'paul' ? data.p_count : data.v_count;
            updateTotal();
        } else {
            alert('¡Algo falló!');
        }
    } catch (error) {
        alert('Error de conexión');
    } finally {
        setTimeout(() => counterAnim.classList.remove('updating'), 150);
    }
}

// ----- ACTUALIZAR EL TOTAL DE AMOR -----
function updateTotal() {
    const p = parseInt(document.getElementById('p-count').textContent) || 0;
    const v = parseInt(document.getElementById('v-count').textContent) || 0;
    const total = p + v;
    const totalEl = document.getElementById('total-count');

    if (totalEl) {
        totalEl.textContent = total;
    }
}

// ----- CREAR ANIMACIÓN DE CORAZONES AL PULSAR EL BOTÓN -----
function createHearts(x, y) {
    const container = document.getElementById('hearts-container');
    const count = 8;

    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.className = 'heart';
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;

        const angle = Math.random() * Math.PI * 2;
        const distance = 80 + Math.random() * 120;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;

        heart.style.setProperty('--tx', `${tx}px`);
        heart.style.setProperty('--ty', `${ty}px`);
        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1200);
    }
}

// ----- MÉTODO QUE LLAMA A DOS LÓGICAS DISTINTAS -> INCREMENTO + ANIMACIÓN CORAZONES.
function incrementWithEffect(type, event) {
    const rect = event.target.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    createHearts(x, y);
    if (type === 'paul') showBubble('paul-bubble');
    if (type === 'vic') showBubble('vic-bubble');

    increment(type);
}

// ----- POLLING: INCREMENTO EN TIEMPO REAL DESDE DIFERENTES DISPOSITIVOS. -----
let pollingActive = false;

function startPolling() {
    if (pollingActive) return;
    pollingActive = true;

    setInterval(async () => {
        try {
            const response = await fetch('/api/counts');
            if (!response.ok) return;

            const data = await response.json();
            const currentP = parseInt(document.getElementById('p-count')?.textContent) || 0;
            const currentV = parseInt(document.getElementById('v-count')?.textContent) || 0;

            let changed = false;

            if (data.p_count !== currentP) {
                document.getElementById('p-count').textContent = data.p_count;
                document.getElementById('p-count').classList.add('sync-pulse');
                setTimeout(() => document.getElementById('p-count').classList.remove('sync-pulse'), 600);
                changed = true;
            }

            if (data.v_count !== currentV) {
                document.getElementById('v-count').textContent = data.v_count;
                document.getElementById('v-count').classList.add('sync-pulse');
                setTimeout(() => document.getElementById('v-count').classList.remove('sync-pulse'), 600);
                changed = true;
            }

            if (changed) {
                updateTotal();
            }
        } catch (e) {
            // Silencioso: No rompe la app
        }
    }, 3000);
}

// ----- INICIAR POLLING CUANDO ESTÉ LISTO -----
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startPolling);
} else {
    startPolling();
}

// ----- GLOBO DE DIALOGO CADA VEZ QUE SE INCREMENTA AMOR -----
function showBubble(bubbleId) {
    const bubble = document.getElementById(bubbleId);
    if (!bubble) return;

    bubble.classList.remove('show');
    void bubble.offsetWidth;
    bubble.classList.add('show');

    setTimeout(() => {
        bubble.classList.remove('show');
    }, 2000);
}
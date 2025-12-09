// public/js/love/ui-effects.js
window.LoveUI = (function () {
    function createHearts(x, y) {
        const container = document.getElementById('hearts-container');
        if (!container) return;

        const count = 8;
        for (let i = 0; i < count; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.className = 'heart';
            heart.style.left = `${x}px`;
            heart.style.top = `${y}px`;

            const angle = Math.random() * Math.PI * 2;
            const distance = 80 + Math.random() * 120;
            heart.style.setProperty('--tx', `${Math.cos(angle) * distance}px`);
            heart.style.setProperty('--ty', `${Math.sin(angle) * distance}px`);

            container.appendChild(heart);
            setTimeout(() => heart.remove(), 1200);
        }
    }

    function showBubble(bubbleId) {
        const bubble = document.getElementById(bubbleId);
        if (!bubble) return;

        bubble.classList.remove('show');
        void bubble.offsetWidth; // reflow
        bubble.classList.add('show');
        setTimeout(() => bubble.classList.remove('show'), 2000);
    }

    return { createHearts, showBubble };
})();
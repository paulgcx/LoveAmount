// Iniciar confeti
confetti({
    particleCount: 150,
    spread: 180,
    origin: { y: 0.1 },
    colors: ['#ff69b4', '#8a2be2', '#00c9ff', '#f8ff00']
});

// Animación continua durante 8 segundos
const duration = 8 * 1000;
const animationEnd = Date.now() + duration;
const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10000 };

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
        clearInterval(interval);
        return;
    }

    const particleCount = 100 * (timeLeft / duration);
    confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
    });
    confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
    });
}, 250);
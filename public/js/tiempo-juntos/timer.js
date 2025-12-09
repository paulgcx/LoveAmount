// public/js/tiempo-juntos/timer.js
(function () {
    const startDate = new Date('{{ $startDateForJs }}');

    function updateTimer() {
        const now = new Date();
        let years = now.getFullYear() - startDate.getFullYear();
        let months = now.getMonth() - startDate.getMonth();
        let days = now.getDate() - startDate.getDate();

        if (days < 0) {
            const lastDay = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
            days += lastDay;
            months--;
        }
        if (months < 0) {
            months += 12;
            years--;
        }

        document.getElementById('years').textContent = years;
        document.getElementById('months').textContent = months;
        document.getElementById('days').textContent = days;

        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById('start-date').textContent = startDate.toLocaleDateString('es-ES', options);

        updateNextAnniversary(now);
    }

    function updateNextAnniversary(now) {
        let y = now.getFullYear();
        let m = now.getMonth();
        if (now.getDate() >= 8) {
            m++;
            if (m > 11) { y++; m = 0; }
        }
        const next = new Date(y, m, 8);
        const diff = next - now;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
        const mins = Math.floor(diff / (1000 * 60)) % 60;

        document.getElementById('countdown-days').textContent = days;
        document.getElementById('countdown-hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('countdown-minutes').textContent = mins.toString().padStart(2, '0');
        document.getElementById('next-anniversary-date').textContent = next.toLocaleDateString('es-ES', options);
    }

    updateTimer();
    setInterval(updateTimer, 60000);
})();
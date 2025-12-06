function updateTimer() {
    const now = new Date();
    
    // Cálculo preciso de años, meses y días
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    
    // Ajustar si los días son negativos
    if (days < 0) {
        // Obtener el último día del mes anterior
        const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days += lastDayOfMonth;
        months--;
    }
    
    // Ajustar si los meses son negativos
    if (months < 0) {
        months += 12;
        years--;
    }
    
    // Actualizar la interfaz
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
    
    // Actualizar la fecha de inicio mostrada
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('start-date').textContent = startDate.toLocaleDateString('es-ES', options);
    
    // Calcular próximo aniversario (día 8 del próximo mes)
    updateNextAnniversary(now);
}

function updateNextAnniversary(now) {
    // Obtener el próximo día 8
    let nextAnniversaryYear = now.getFullYear();
    let nextAnniversaryMonth = now.getMonth();
    
    // Si ya pasó el día 8 de este mes, buscar el próximo mes
    if (now.getDate() >= 8) {
        nextAnniversaryMonth += 1;
        // Si es diciembre, pasar al próximo año
        if (nextAnniversaryMonth > 11) {
            nextAnniversaryMonth = 0;
            nextAnniversaryYear += 1;
        }
    }
    
    // Crear fecha del próximo aniversario
    const nextAnniversary = new Date(nextAnniversaryYear, nextAnniversaryMonth, 8);
    
    // Calcular diferencia hasta el próximo aniversario
    const diff = nextAnniversary - now;
    
    // Convertir la diferencia a días, horas, minutos
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    // Actualizar la interfaz del countdown
    document.getElementById('countdown-days').textContent = days;
    document.getElementById('countdown-hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('countdown-minutes').textContent = minutes.toString().padStart(2, '0');
    
    // Actualizar la fecha del próximo aniversario mostrada
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('next-anniversary-date').textContent = nextAnniversary.toLocaleDateString('es-ES', options);
}

// Iniciar el temporizador
updateTimer();
setInterval(updateTimer, 60000);
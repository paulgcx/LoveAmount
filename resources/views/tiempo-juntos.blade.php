<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🕑</title>
    <link rel="icon" href="{{ asset('favicon.ico') }}" type="image/x-icon">
    <link rel="stylesheet" href="{{ asset('css/tiempo-juntos.css') }}">
    <link rel="stylesheet" href="{{ asset('css/arrow.css') }}">
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Quicksand:wght@400;600&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="love-icon">💙</div>
            <h1>Nuestro Tiempo Juntos</h1>
        </div>
        
        <div class="timer-container">
            <div class="time-unit">
                <div class="time-value" id="years">0</div>
                <div class="time-label">Años</div>
            </div>
            <div class="time-unit">
                <div class="time-value" id="months">0</div>
                <div class="time-label">Meses</div>
            </div>
            <div class="time-unit">
                <div class="time-value" id="days">0</div>
                <div class="time-label">Días</div>
            </div>
        </div>
        
        <div class="date-display">
            <h2>Desde el día:</h2>
            <p id="start-date">8 de septiembre de 2023</p>
        </div>

        <div class="anniversary-container">
            <h2>Próximo aniversario:</h2>
            <div class="countdown-container">
                <div class="countdown-unit">
                    <div class="countdown-value" id="countdown-days">0</div>
                    <div class="countdown-label">Días</div>
                </div>
                <div class="countdown-unit">
                    <div class="countdown-value" id="countdown-hours">0</div>
                    <div class="countdown-label">Horas</div>
                </div>
                <div class="countdown-unit">
                    <div class="countdown-value" id="countdown-minutes">0</div>
                    <div class="countdown-label">Minutos</div>
                </div>
            </div>
            <p id="next-anniversary-date">8 de octubre de 2023</p>
        </div>

        <a href="{{ route('love.index') }}" class="back-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
            </svg>
        </a>

    </div>

    <script>const startDate = new Date('{{ $startDateForJs }}');</script>
    <script src="{{ asset('js/tiempo-juntos.js') }}"></script>
</body>
</html>
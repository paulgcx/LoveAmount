<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>❤️</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{ asset('css/love.css') }}">
    <link rel="stylesheet" href="{{ asset('css/arrow.css') }}">
</head>
<body>
    <div class="container">
        <div class="date-display">{{ $date }}</div>

        <div class="counters">

            <!-- PAUL -->
            <div class="person-box">
                <div class="name">Paul</div>
                <div class="counter fade" id="p-count">{{ $p_count }}</div>
                <button class="btn" onclick="incrementWithEffect('paul', event)">+1</button>
            </div>

            <!-- VICMEOW -->
            <div class="person-box">
                <div class="name">VicMeow</div>
                <div class="counter fade" id="v-count">{{ $v_count }}</div>
                <button class="btn" onclick="incrementWithEffect('vic', event)">+1</button>
            </div>
        </div>

        <!-- Flecha hacia "tiempo juntos" -->
        <a href="{{ route('tiempo.juntos') }}" class="arrow-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
        </a>
    </div>

    <div id="hearts-container"></div>
    <script src="{{ asset('js/love.js') }}"></script>
</body>
</html>
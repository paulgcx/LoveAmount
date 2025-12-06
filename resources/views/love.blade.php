<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>❤️</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{ asset('css/love.css') }}">
</head>
<body>
    <div class="container">
        <div class="counters">

            <!-- PAUL -->
            <div class="counter-box">
                <div>Paul</div>
                <div class="counter" id="p-count">{{ $p_count }}</div>
                <button class="btn" onclick="increment('paul')">+1</button>
            </div>

            <!-- VICMEOW -->
            <div class="counter-box">
                <div>VicMeow</div>
                <div class="counter" id="v-count">{{ $v_count }}</div>
                <button class="btn" onclick="increment('vic')">+1</button>
            </div>
        </div>

        <div class="date-display">
            {{ $date }}
        </div>
    </div>
    <script src="{{ asset('js/love.js') }}"></script>
</body>
</html>
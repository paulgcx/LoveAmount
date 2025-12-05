<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>❤️</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{ asset('css/love.css') }}">
    <script src="{{ asset('js/love.js') }}"></script>
</head>
<body>
    <div class="container">
        <h1>{{ $date }}</h1>

        <div class="counters">
            <div class="counter-box">
                <div>Paul</div>
                <div class="counter" id="p-count">{{ $p_count }}</div>
            </div>
            <div class="counter-box">
                <div>VicMeow</div>
                <div class="counter" id="v-count">{{ $v_count }}</div>
            </div>
        </div>

        <button class="btn" onclick="increment('paul')">+1 Para mí</button>
        <button class="btn" onclick="increment('vic')">+1 Para ella</button>
    </div>
</body>
</html>
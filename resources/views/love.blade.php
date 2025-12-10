@php
    // Quién está viendo la página:
    $key = request()->get('key');
@endphp

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>❤️</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" href="{{ asset('favicon.ico') }}" type="image/x-icon">
    @vite(['resources/sass/love.scss'])
</head>
<body>
    <div class="container">
    @if (!$key)
        <div class="intro-message">
            ¿Eres <a href="?key=paul">Paul</a> o <a href="?key=vic">VicMeow</a>?
        </div>
    @else
        <div>
            <div class="date-display">{{ $date }}</div>
            <div class="total-container">
                <div class="total-count" id="total-count">{{ $p_count + $v_count }}</div>
                <div class="total-heart">❤️</div>
            </div>
        </div>
        
        <!-- Botones -->
        <div class="counters">
            <!-- PAUL -->
            <div class="person-with-bg">
                <img src="{{ asset('img/billy.png') }}" class="billy">
                <div class="speech-bubble" id="paul-bubble">¡Te quiero, amor!</div>
                <div class="person-box">
                    <div class="name">Paul</div>
                    <div class="counter fade" id="p-count">{{ $p_count }}</div>
                    @if($key === 'paul')
                        <button class="btn" onclick="handleLoveClick('paul', event)">+1 ❤️</button>
                    @else
                        <button class="btn disabled" disabled>+1 ❤️</button>
                    @endif
                </div>
            </div>

            <!-- VICMEOW -->
            <div class="person-with-bg">
                <img src="{{ asset('img/pusheen.png') }}" class="pusheen">
                <div class="speech-bubble" id="vic-bubble">¡Te quiero, amor!</div>
                <div class="person-box">
                    <div class="name">VicMeow</div>
                    <div class="counter fade" id="v-count">{{ $v_count }}</div>
                    @if($key === 'vic')
                        <button class="btn" onclick="handleLoveClick('vic', event)">+1 ❤️</button>
                    @else
                        <button class="btn disabled" disabled>+1 ❤️</button>
                    @endif
                </div>
            </div>
        </div>

        <!-- Flecha hacia "tiempo juntos" -->
        <a href="{{ route('tiempo.juntos') }}{{ $key ? '?key=' . $key : '' }}" class="arrow-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
        </a>
    </div>

    <div id="hearts-container"></div>
    
    <!-- SCRIPTS -->
    <script src="{{ asset('js/love/api.js') }}"></script>
    <script src="{{ asset('js/love/dom.js') }}"></script>
    <script src="{{ asset('js/love/ui-effects.js') }}"></script>
    <script src="{{ asset('js/love/sync.js') }}"></script>
    <script src="{{ asset('js/script.js') }}"></script>
    @endif
</body>
</html>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>❤️</title>
    <link rel="stylesheet" href="{{ asset('css/love.css') }}">
</head>
<body>
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

    <script>
        async function increment(type) {
            const url = type === 'paul' ? '/increment/paul' : '/increment/vic';
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': '{{ csrf_token() }}',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                const data = await response.json();
                if (type === 'paul') {
                    document.getElementById('p-count').textContent = data.p_count;
                } else {
                    document.getElementById('v-count').textContent = data.v_count;
                }
            } else {
                alert('¡Ups! Algo falló 😢');
            }
        }
    </script>
</body>
</html>
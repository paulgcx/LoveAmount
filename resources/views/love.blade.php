<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>❤️</title>
    <style>
        body {
            font-family: 'Segoe UI', sans-serif;
            background: #fff0f5;
            text-align: center;
            padding: 40px;
            margin: 0;
        }
        h1 {
            color: #d43a7e;
        }
        .counters {
            display: flex;
            justify-content: center;
            gap: 40px;
            margin: 30px 0;
        }
        .counter-box {
            background: white;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            min-width: 150px;
        }
        .counter {
            font-size: 3em;
            color: #ff69b4;
            font-weight: bold;
        }
        .btn {
            padding: 12px 28px;
            font-size: 1.1em;
            margin: 10px;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            background: #ff69b4;
            color: white;
            font-weight: bold;
            transition: background 0.3s;
        }
        .btn:hover {
            background: #ff1493;
        }
    </style>
</head>
<body>
    <h1>Contador - {{ $date }}</h1>

    <div class="counters">
        <div class="counter-box">
            <div>Tú</div>
            <div class="counter" id="p-count">{{ $p_count }}</div>
        </div>
        <div class="counter-box">
            <div>Ella</div>
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
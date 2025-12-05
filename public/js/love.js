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
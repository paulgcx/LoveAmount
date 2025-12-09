// public/js/love/api.js
window.LoveAPI = (function () {
    function getCsrfToken() {
        return document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    }

    async function increment(type) {
        const url = type === 'paul' ? '/increment/paul' : '/increment/vic';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': getCsrfToken(),
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        if (!response.ok) throw new Error('Server error');
        return await response.json();
    }

    async function getCurrentCounts() {
        const response = await fetch('/api/counts');
        if (!response.ok) throw new Error('Sync error');
        return await response.json();
    }

    return { increment, getCurrentCounts };
})();
// public/js/love/dom.js
window.LoveDOM = (function () {
    function getCount(id) {
        const el = document.getElementById(id);
        return el ? parseInt(el.textContent) || 0 : 0;
    }

    function setCount(id, value) {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    }

    function updateTotal() {
        const p = getCount('p-count');
        const v = getCount('v-count');
        const totalEl = document.getElementById('total-count');
        if (totalEl) totalEl.textContent = p + v;
    }

    function animateCount(id) {
        const el = document.getElementById(id);
        if (!el) return;
        el.classList.add('sync-pulse');
        setTimeout(() => el.classList.remove('sync-pulse'), 600);
    }

    return { updateTotal, animateCount, setCount, getCount };
})();
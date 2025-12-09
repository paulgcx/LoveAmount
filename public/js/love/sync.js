// public/js/love/sync.js
window.LoveSync = (function () {
    let isActive = false;

    async function poll() {
        try {
            const data = await window.LoveAPI.getCurrentCounts();
            const currentP = window.LoveDOM.getCount('p-count');
            const currentV = window.LoveDOM.getCount('v-count');
            let changed = false;

            if (data.p_count !== currentP) {
                window.LoveDOM.setCount('p-count', data.p_count);
                window.LoveDOM.animateCount('p-count');
                changed = true;
            }
            if (data.v_count !== currentV) {
                window.LoveDOM.setCount('v-count', data.v_count);
                window.LoveDOM.animateCount('v-count');
                changed = true;
            }
            if (changed) window.LoveDOM.updateTotal();
        } catch (e) {
            // Silencioso
        }
    }

    function start() {
        if (isActive) return;
        isActive = true;
        setInterval(poll, 3000);
    }

    return { start };
})();
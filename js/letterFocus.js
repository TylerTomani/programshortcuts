let letterFocusInitialized = false;

export function letterFocus() {
    if (letterFocusInitialized) return; // ✅ prevent double-binding
    letterFocusInitialized = true;

    let newIndex = 0;

    document.addEventListener('keydown', function (e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        const key = e.key.toLowerCase();

        const allAs = [...document.querySelectorAll('a, [id]')].filter(el => {
            const rect = el.getBoundingClientRect();
            return el.offsetParent !== null && rect.width > 0 && rect.height >= 0;
        });

        const letteredAs = allAs.filter(a => a.id[0]?.toLowerCase() === key);
        if (letteredAs.length === 0) return;

        const active = document.activeElement;
        const currentIndexInFiltered = letteredAs.indexOf(active);

        if (key !== window.lastLetterPressed) {
            newIndex = e.shiftKey ? letteredAs.length - 1 : 0;
        } else {
            newIndex = e.shiftKey
                ? (currentIndexInFiltered - 1 + letteredAs.length) % letteredAs.length
                : (currentIndexInFiltered + 1) % letteredAs.length;
        }

        const nextEl = letteredAs[newIndex];
        if (nextEl) {
            if (!nextEl.hasAttribute('tabindex')) {
                nextEl.setAttribute('tabindex', '0');
            }
            nextEl.focus();
        }
        window.lastLetterPressed = key;
    });
}

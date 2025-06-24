export function letterFocus(){
document.addEventListener('keydown', function (e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    const key = e.key.toLowerCase();
    if (key.length !== 1 || !/^[a-z0-9]$/.test(key)) return;

    const allAs = [...document.querySelectorAll('[id]')].filter(a => {
        const rect = a.getBoundingClientRect();
        return a.offsetParent !== null && rect.width > 0 && rect.height > 0;
    });

    const letteredAs = allAs.filter(a => a.id[0]?.toLowerCase() === key);
    if (letteredAs.length === 0) return;

    const active = document.activeElement;
    const iActiveA = allAs.indexOf(active);
    const currentIndexInFiltered = letteredAs.indexOf(active);

    if (key !== window.lastLetterPressed) {
        // New letter pressed
        let iLetter;

        if (e.shiftKey) {
            const prev = [...letteredAs].reverse().find(a => allAs.indexOf(a) < iActiveA);
            iLetter = letteredAs.indexOf(prev);
            if (iLetter === -1) iLetter = letteredAs.length - 1;
        } else {
            const next = letteredAs.find(a => allAs.indexOf(a) > iActiveA);
            iLetter = letteredAs.indexOf(next);
            if (iLetter === -1) iLetter = 0;
        }
        if(!letteredAs[iLetter].hasAttribute('tabindex')){
            letteredAs[iLetter]?.setAttribute('tabindex','0')
        }
        console.log(letteredAs[iLetter])
        letteredAs[iLetter]?.focus();
    } else {
        // Same letter pressed again — go to top-most matching element on screen
        const sortedByTop = [...letteredAs].sort((a, b) => {
            return a.getBoundingClientRect().top - b.getBoundingClientRect().top;
        });
        sortedByTop[0]?.focus();
    }

    window.lastLetterPressed = key;
});
}

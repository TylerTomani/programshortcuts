export function letterFocus() {
// if (letterFocusInitialized) return; // prevent double binding
//     letterFocusInitialized = true;    
    let newIndex = 0

document.addEventListener('keydown', function (e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    const key = e.key.toLowerCase();
    // if(e.shiftKey && key == 's')    {
    //     const searchInput = document.querySelector('.main-search-nav input')
    //     if(!searchInput.hasAttribute('tabindex')){
    //         searchInput.setAttribute('tabindex','1')
    //     }   
    //     searchInput.focus()
    // }
    // if (key.length !== 1 || !/^[a-z0-9]$/.test(key)) return;

    const allAs = [...document.querySelectorAll('a, [id]')].filter(el => {
        const rect = el.getBoundingClientRect()
        
        return el.offsetParent !== null && rect.width > 0 && rect.height >= 0 ? el.offsetParent !== null && rect.width > 0 && rect.height >= 0 : 0
    })

    const letteredAs = allAs.filter(a => {
        console.log(a)
       return  a.id[0]?.toLowerCase() === key
    });
    if (letteredAs.length === 0) return;

    const active = document.activeElement;
    const currentIndexInFiltered = letteredAs.indexOf(active);

    


    if (key !== window.lastLetterPressed) {
        // New letter: start from the first (or last with shift)
        newIndex = e.shiftKey ? letteredAs.length - 1 : 0;
    } else {
    // Same letter: move next or previous in filtered list
    if (e.shiftKey) {
        newIndex = (currentIndexInFiltered - 1 + letteredAs.length) % letteredAs.length;
    } else {
        newIndex = (currentIndexInFiltered + 1) % letteredAs.length;
    }
    }

    const nextEl = letteredAs[newIndex];
    if (nextEl) {
    if (!nextEl.hasAttribute('tabindex')) {
        nextEl.setAttribute('tabindex', '0');
    }
    nextEl.focus();
    }
    // console.log('Filtered elements with id starting with', key, letteredAs.map(a => a.id))

    window.lastLetterPressed = key;
    });
}

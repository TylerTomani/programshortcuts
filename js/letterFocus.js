import { links } from "./injectPage.js";
import { mainLandingPage } from "./injectPage.js";
let letterFocusInitialized = false;
export function letterFocus() {
    let homeAside = document.getElementById('homeAside')
        
    homeAside.addEventListener('focus',()=>{
        
    })
    if (letterFocusInitialized) return; // ✅ prevent double-binding
    letterFocusInitialized = true;
    let newIndex = 0;
    let keys = {
        shift:{
            pressed: false
        },
        meta: {
            pressed:false,
        },
        s:{
            pressed: false
        }
    }
    links.forEach(el => {
        el.addEventListener('focus', e => {
            scrollTo(0,0)
        })
        el.addEventListener('click', e => {

            const aLinks = mainLandingPage.querySelectorAll('.page-container a')
            aLinks.forEach(el => {
                
                if(el.hasAttribute('autofocus')){
                    el.removeAttribute('autofocus')
                }
            })
        })
    })
    document.addEventListener('keydown', function (e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        const key = e.key.toLowerCase();
        if(key ===  'shift'){keys.shift.pressed = true} 
        if(key == 'meta'){keys.meta.pressed = true} 
        if (key == 's'){keys.s.pressed = true}
        if(keys.shift.pressed && keys.meta.pressed && keys.s.pressed){
            const searchQueryInput = document.querySelector('.search-query > input')
            searchQueryInput.focus()
            keys.shift.pressed = false
            keys.meta.pressed = false
            keys.s.pressed = false
            return 
        } 
        const allAs = [...document.querySelectorAll('a, [id]')].filter(el => {
            const rect = el.getBoundingClientRect();
            return el.offsetParent !== null && rect.width > 0 && rect.height >= 0;
        });
        const letteredAs = allAs.filter(a => a.id[0]?.toLowerCase() === key);
        if (letteredAs.length === 0) return;
        const active = document.activeElement;
        const currentIndexInFiltered = letteredAs.indexOf(active);
        if(!e.meta){
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
            if(keys.shift.pressed && keys.meta.pressed && keys.s.pressed){
                const searchQueryInput = document.querySelector('.search-query > input')
                searchQueryInput.focus()
            } else {
                keys.shift.pressed = false
                keys.meta.pressed = false
                keys.s.pressed = false
            }        
        }
        
    });
    
}
// letterFocus()
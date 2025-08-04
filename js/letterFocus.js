import { sideBarLinks } from "./injectPage.js";
import { mainLandingPage } from "./injectPage.js";
let letterFocusInitialized = false;
const sideBar = document.querySelector('.side-bar')
export function letterFocus() {
    let homeAside = document.getElementById('homeAside')
    let lastFocusedSideEl = null
    let focusedSideBarLinks = false
    sideBar.addEventListener('focus',()=> {
        focusedSideBarLinks = true
    })
    sideBar.addEventListener('focusout',()=>{
        focusedSideBarLinks = false
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
    sideBarLinks.forEach(el => {
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
        if (key == 's'){
            // keys.s.pressed = true
            console.log(focusedSideBarLinks)
            if(!focusedSideBarLinks){
                if(lastFocusedSideEl){
                    lastFocusedSideEl.focus()
                }
            }
        }
        if(keys.shift.pressed && keys.meta.pressed && keys.s.pressed){
            const searchQueryInput = document.querySelector('.search-query > input')
            searchQueryInput.focus()
            keys.shift.pressed = false
            keys.meta.pressed = false
            keys.s.pressed = false
            return 
        } 
        const allEls = [...document.querySelectorAll('.side-bar li a, a[id]')].filter(el => {
            const rect = el.getBoundingClientRect();
            return el.offsetParent !== null && rect.width > 0 && rect.height >= 0;
        });
        // checking if element are lower on the page
        const letteredEls = [...document.querySelectorAll('a, [id]')].filter(el => {
          const rect = el.getBoundingClientRect();
            return (
            getComputedStyle(el).visibility !== 'hidden' &&
            getComputedStyle(el).display !== 'none' &&
            rect.width > 0 &&
            rect.height > 0 &&
             el.id[0]?.toLowerCase() === key
        );
        });
        if (letteredEls.length === 0) return;
        const active = document.activeElement;
        const currentIndexInFiltered = letteredEls.indexOf(active);
        if(!e.meta){
            if (key !== window.lastLetterPressed) {
                newIndex = e.shiftKey ? letteredEls.length - 1 : 0;
            } else {
                newIndex = e.shiftKey
                    ? (currentIndexInFiltered - 1 + letteredEls.length) % letteredEls.length
                    : (currentIndexInFiltered + 1) % letteredEls.length;
            }
            const nextEl = letteredEls[newIndex];
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
            if(focusedSideBarLinks){
                lastFocusedSideEl = nextEl
            }
            if(!focusedSideBarLinks && keys.s.pressed && lastFocusedSideEl ){
                // lastFocusedSideEl.focus()
            }
        } 
    });    
}

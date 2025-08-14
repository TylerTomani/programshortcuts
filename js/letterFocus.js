import { sideBarLinks } from "./main-script.js";
import { sideBarBtn } from "./toggle-sidebar.js";
import { mainLandingPage } from "./injectPage.js";
let letterFocusInitialized = false;
const sideBar = document.querySelector('.side-bar')
    export function letterFocus() {
    let homeAside = document.getElementById('homeAside')
    let lastFocusedSideEl = null
    let focusedSideBarLinks = false
    const allAs = document.querySelectorAll('a')
    allAs.forEach(a => {
        if(a.hasAttribute('target')){
            a.addEventListener('click', e => {
                console.log(a)
                console.log(e.target)
                console.log(a.href)
                window.open(a.href,'_blank')    
            })
        }        
    })
    sideBarLinks.forEach(el => {
        if(el.hasAttribute('autofocus')){
            lastFocusedSideEl = el
        }
        
        el.addEventListener('focus',e => {
            focusedSideBarLinks = true
            lastFocusedSideEl = e.target
        })
        el.addEventListener('focusout',()=>{
            focusedSideBarLinks = false
        })

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
        
        if(keys.shift.pressed && keys.meta.pressed && keys.s.pressed){
            const searchQueryInput = document.querySelector('.search-query > input')
            searchQueryInput.focus()
            keys.shift.pressed = false
            keys.meta.pressed = false
            keys.s.pressed = false
            return 
        } 
        const allEls = [...document.querySelectorAll('.side-bar li a, [id]')].filter(el => {
            const rect = el.getBoundingClientRect();
            return el.offsetParent !== null && rect.width > 0 && rect.height >= 0;
        });
        // checking if element are lower on the page
        const letteredEls = [...document.querySelectorAll('a, [id],i[id]')].filter(el => {
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
            if(key === 's' && !focusedSideBarLinks && lastFocusedSideEl){
                console.log('focus')
                lastFocusedSideEl.focus()
            } else {
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
            }        
          
        } 
        if(e.target.id == 'shortcutsAside' && key == 's'){
            sideBarBtn.focus()
        }
        // This is sloppy handling of focusing to #sideBarBtn from #shortcutsAside
        // But it's working
        if (key == 's' ){
            // keys.s.pressed = false
            if(sideBar.classList.contains('hide')){
                sideBar.classList.remove('hide')
            }
            if(!focusedSideBarLinks && lastFocusedSideEl){
                lastFocusedSideEl.focus()
            }
        }
    });    
}
